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
        <h1>LuxCars</h1>
        <p>Supercarros. Exclusividade. Performance.</p>
      </section>

      <section className="car-grid">
        {loading && <p>Carregando...</p>}
        {items.map((car: any, i: number) => (
          <CarCard key={i} _id={car._id} brand={car.brand} model={car.model} image={car.images?.[0]} />
        ))}
      </section>
    </>
  );
}