import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Car } from '../types';
import { api, assetUrl } from '../api';
import Header from '../components/Header';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    api
      .get(`/cars/${id}`)
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
      <main className="car-details">
        <h2>
          {car.brand} {car.model}
        </h2>

        {car.images?.[0] && (
          <img 
            src={assetUrl(car.images[0])} 
            className="car-details-img" 
            alt={`${car.brand} ${car.model}`}
            loading="eager"
            decoding="async"
          />
        )}

        <p className="desc">{car.description}</p>
        <p className="info">
          Ano: {car.year} • Preço: R$ {car.price ? car.price.toLocaleString() : '—'}
        </p>
      </main>
    </div>
  );
}
