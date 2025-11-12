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
      <div className="car-card-image">
        {image && (
          <img 
            src={assetUrl(image)} 
            alt={`${brand} ${model}`}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div className="car-info">
        <h3>{brand}</h3>
        <p>{model}</p>
      </div>
    </Link>
  );
}
