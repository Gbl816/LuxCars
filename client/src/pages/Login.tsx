import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import '../styles/auth.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

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

    setLoading(true);

    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/" className="auth-logo">LuxCars</Link>
          <h1>Bem-vindo de volta</h1>
          <p>Entre para acessar sua conta premium</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}
          
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
              title="Por favor, preencha este campo"
            />
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

          <div className="auth-footer">
            <p>Não tem uma conta? <Link to="/register">Criar conta</Link></p>
          </div>
        </form>

        <div className="auth-decoration"></div>
      </div>
    </div>
  );
}