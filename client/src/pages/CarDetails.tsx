import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function CarDetails() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <main style={{ padding: '24px 60px' }}>
        <h2>Detalhes do Carro</h2>
        <p>ID: {id}</p>
        <p>Dados detalhados do carro serão exibidos aqui.</p>
      </main>
    </div>
  );
}
