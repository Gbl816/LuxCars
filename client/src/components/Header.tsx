import React from 'react';
import './../styles/layout.scss';

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">LuxCars</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Entrar</a>
        <a href="/register">Registrar</a>
      </nav>
    </header>
  );
}
