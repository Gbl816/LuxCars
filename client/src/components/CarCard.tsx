import React from 'react';
import './../styles/car-card.scss';

export default function CarCard({ image, brand, model }: any) {
  return (
    <div className="car-card">
      <img src={image} alt={model} />
      <h3>{brand}</h3>
      <p>{model}</p>
    </div>
  );
}
