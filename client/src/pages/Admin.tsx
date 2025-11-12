import { useState } from "react";
import { api, assetUrl } from "../api";
import Header from "../components/Header";

export default function Admin() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const token = localStorage.getItem("token");

  function handleFile(e: any) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

  api.post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
    .then(res => {
      const url = assetUrl(res.data.imageUrl);
      setImage(url);
      setPreview(url);
    })
    .catch(() => alert("Erro ao fazer upload da imagem ❌"));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
  api.post("/cars", {
      brand,
      model,
      year: Number(year),
      price: Number(price),
      description,
      images: [image]
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => {
      alert("Carro cadastrado com sucesso ✅");
      setBrand(""); setModel(""); setYear(""); setPrice(""); setDescription(""); setImage(""); setPreview("");
    })
    .catch(() => alert("Erro ao cadastrar ❌"));
  }

  return (
    <>
      <Header />
      <div className="admin-form">
        <h1>Cadastrar Carro</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="Marca" value={brand} onChange={e => setBrand(e.target.value)} />
          <input placeholder="Modelo" value={model} onChange={e => setModel(e.target.value)} />
          <input placeholder="Ano" value={year} onChange={e => setYear(e.target.value)} />
          <input placeholder="Preço" value={price} onChange={e => setPrice(e.target.value)} />
          <input type="file" accept="image/*" onChange={handleFile} />
          {preview && <img src={preview} className="preview" alt="Preview" />}
          <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}
