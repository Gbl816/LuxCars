import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    axios
      .get(`http://localhost:4000/api/cars/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError('Erro ao carregar os dados do carro.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ padding: 24 }}>Carregando...</p>;
  if (error) return <p style={{ padding: 24 }}>{error}</p>;
  if (!car) return <p style={{ padding: 24 }}>Carro não encontrado.</p>;

  return (
    <div>
      <Header />
      <main style={{ padding: '24px 60px' }}>
        <h2>
          {car.brand} {car.model}
        </h2>
        <p>{car.description}</p>
        <p>
          Ano: {car.year} • Preço: R$ {car.price ? car.price.toLocaleString() : '—'}
        </p>
      </main>
    </div>
  );
}
