import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/car-card.scss';

interface CarCardProps {
  _id: string;
  image: string;
  brand: string;
  model: string;
}

export default function CarCard({ image, brand, model, _id }: CarCardProps) {
  return (
    <Link to={`/cars/${_id}`} className="car-card">
      <img src={image} alt={model} />
      <h3>{brand}</h3>
      <p>{model}</p>
    </Link>
  );
}
