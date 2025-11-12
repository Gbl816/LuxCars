import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import '../styles/auth.scss';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!name) {
      setError('Por favor, preencha seu nome completo');
      return;
    }
    if (!email) {
      setError('Por favor, preencha o email');
      return;
    }
    if (!email.includes('@')) {
      setError('Por favor, insira um email válido');
      return;
    }
    if (!password) {
      setError('Por favor, preencha a senha');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/auth/register', { name, email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao criar conta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="auth-logo">LuxCars</Link>
          <h1>Junte-se a nós</h1>
          <p>Crie sua conta e acesse conteúdo exclusivo</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label>Nome completo</label>
            <input 
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              title="Por favor, preencha seu nome completo"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              title="Por favor, insira um email válido"
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input 
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              title="A senha deve ter no mínimo 6 caracteres"
            />
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Criando conta...' : 'Criar conta'}
          </button>

          <div className="auth-footer">
            <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
          </div>
        </form>

        <div className="auth-decoration"></div>
      </div>
    </div>
  );
}