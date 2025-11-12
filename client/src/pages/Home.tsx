import { useEffect } from "react";
import Header from "../components/Header";
import CarCard from "../components/CarCard";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCars } from "../store/slices/carsSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Experiência Premium</div>
          <h1 className="hero-title">
            <span className="gradient-text">LuxCars</span>
          </h1>
          <p className="hero-subtitle">
            Onde <strong>luxo</strong> encontra <strong>performance</strong>
          </p>
          <p className="hero-description">
            Explore a coleção mais exclusiva de supercarros do mundo. 
            Ferrari, Lamborghini, McLaren e mais.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{items.length}</span>
              <span className="stat-label">Supercarros</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Premium</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Disponível</span>
            </div>
          </div>
        </div>
        <div className="hero-gradient"></div>
      </section>

      <section className="car-grid-section">
        <div className="section-header">
          <h2>Nossa Coleção</h2>
          <p>Os mais incríveis supercarros do mercado</p>
        </div>
        <div className="car-grid">
          {loading && <p className="loading">Carregando...</p>}
          {items.map((car: any, i: number) => (
            <CarCard key={i} _id={car._id} brand={car.brand} model={car.model} image={car.images?.[0]} />
          ))}
        </div>
      </section>
    </>
  );
}