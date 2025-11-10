import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import './../styles/layout.scss';

export default function Header() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className="header">
      <h2 className="logo">LuxCars</h2>
      <nav>
        <Link to="/">Home</Link>
        {user && <Link to="/admin">Admin</Link>}
        <Link to="/login">Entrar</Link>
      </nav>
    </header>
  );
}
