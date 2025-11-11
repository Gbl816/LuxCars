import { Link } from "react-router-dom";
import './../styles/layout.scss';

export default function Header() {
  const token = localStorage.getItem("token");

  return (
    <header className="header">
      <h2 className="logo">LuxCars</h2>
      <nav>
        <Link to="/">Home</Link>
        {token && <Link to="/admin">Admin</Link>}
        <Link to="/login">Entrar</Link>
      </nav>
    </header>
  );
}
