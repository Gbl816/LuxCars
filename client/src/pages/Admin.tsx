import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

export default function Admin() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const token = localStorage.getItem("token");

  function handleSubmit(e: any) {
    e.preventDefault();
    axios.post("http://localhost:4000/api/cars", {
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
      setBrand(""); setModel(""); setYear(""); setPrice(""); setDescription(""); setImage("");
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
          <input placeholder="URL da Imagem" value={image} onChange={e => setImage(e.target.value)} />
          <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}
