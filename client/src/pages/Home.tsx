import Header from "../components/Header";
import CarCard from "../components/CarCard";

export default function Home() {
  const cars = [
  { brand: "Ferrari", model: "SF90 Stradale", image: "/src/assets/cars/ferrari-sf90.jpg" },
  { brand: "Ferrari", model: "F8 Tributo", image: "/src/assets/cars/ferrari-f8.jpg" },
  { brand: "Lamborghini", model: "Aventador SVJ", image: "/src/assets/cars/aventador.jpg" },
  { brand: "Lamborghini", model: "Huracán EVO", image: "/src/assets/cars/huracan.jpg" },
  { brand: "McLaren", model: "720S", image: "/src/assets/cars/mclaren-720s.jpg" },
  { brand: "McLaren", model: "P1", image: "/src/assets/cars/mclaren-p1.jpg" },
  { brand: "Porsche", model: "911 Turbo S", image: "/src/assets/cars/porsche-911.jpg" },
  { brand: "Porsche", model: "911 GT3 RS", image: "/src/assets/cars/porsche-gt3.jpg" },
  { brand: "Bugatti", model: "Chiron", image: "/src/assets/cars/bugatti-chiron.jpg" },
  { brand: "Audi", model: "R8 V10 Performance", image: "/src/assets/cars/r8.jpg" },
];
  return (
    <>
      <Header />

      <section className="hero">
        <h1>LuxCars</h1>
        <p>Supercarros. Exclusividade. Performance.</p>
      </section>

      <section className="car-grid">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </section>
    </>
  );
}