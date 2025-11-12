import React from 'react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../api';
import './../styles/car-card.scss';

interface CarCardProps {
  _id: string;
  image: string;
  brand: string;
  model: string;
}

export default function CarCard({ image, brand, model, _id }: CarCardProps) {
  return (
    <Link to={`/car/${_id}`} className="car-card">
      {image && <img src={assetUrl(image)} alt={model} />}
      <h3>{brand}</h3>
      <p>{model}</p>
    </Link>
  );
}
