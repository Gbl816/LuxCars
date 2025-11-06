import React from 'react';

export default function Register() {
  return (
    <div>
      <h2>Criar Conta</h2>
      <input placeholder="Nome" />
      <input placeholder="Email" />
      <input placeholder="Senha" type="password" />
      <button>Cadastrar</button>
    </div>
  );
}