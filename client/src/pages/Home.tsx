import React from 'react';
import Header from '../components/Header';
import CarCard from '../components/CarCard';
import '../styles/layout.scss';

export default function Home() {
  const cars = [
    { image: 'https://via.placeholder.com/400x200?text=Car+1', brand: 'Ferrari', model: 'F8 Tributo' },
    { image: 'https://via.placeholder.com/400x200?text=Car+2', brand: 'Lamborghini', model: 'Huracan' },
    { image: 'https://via.placeholder.com/400x200?text=Car+3', brand: 'Porsche', model: '911 Turbo' },
  ];

  return (
    <div>
      <Header />
      <main style={{ padding: '24px 60px' }}>
        <h1 style={{ marginBottom: 12 }}>LuxCars</h1>
        <p style={{ opacity: 0.8, marginBottom: 20 }}>Supercarros. Exclusividade. Performance.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {cars.map((c, i) => (
            <CarCard key={i} image={c.image} brand={c.brand} model={c.model} />
          ))}
        </div>
      </main>
    </div>
  );
}