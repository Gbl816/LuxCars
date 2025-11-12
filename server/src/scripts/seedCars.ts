import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Car from '../models/Car';
import User from '../models/User';

dotenv.config();

const luxuryCars = [
  {
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2024,
    price: 280000,
    description: 'Superesportivo com motor V10 naturalmente aspirado de 640 cv',
    images: ['/uploads/huracan.jpg']
  },
  {
    brand: 'Lamborghini',
    model: 'Aventador SVJ',
    year: 2023,
    price: 517770,
    description: 'O mais extremo Lamborghini de produção com motor V12 de 770 cv',
    images: ['/uploads/aventador.jpg']
  },
  {
    brand: 'Ferrari',
    model: 'F8 Tributo',
    year: 2023,
    price: 350000,
    description: 'Superesportivo italiano com motor V8 biturbo de 720 cv',
    images: ['/uploads/ferrari-f8.jpg']
  },
  {
    brand: 'Ferrari',
    model: 'SF90 Stradale',
    year: 2024,
    price: 625000,
    description: 'Primeiro híbrido plug-in da Ferrari com 1000 cv de potência',
    images: ['/uploads/ferrari-sf90.jpg']
  },
  {
    brand: 'McLaren',
    model: '720S',
    year: 2023,
    price: 310000,
    description: 'Superesportivo britânico com motor V8 biturbo de 720 cv',
    images: ['/uploads/mclaren-720s.jpg']
  },
  {
    brand: 'McLaren',
    model: 'P1',
    year: 2015,
    price: 1350000,
    description: 'Hipercarro híbrido limitado com 916 cv de potência combinada',
    images: ['/uploads/mclaren-p1.jpg']
  },
  {
    brand: 'Porsche',
    model: '911 Turbo S',
    year: 2024,
    price: 240000,
    description: 'Ícone alemão com motor boxer de 650 cv e tração integral',
    images: ['/uploads/porsche-911.jpg']
  },
  {
    brand: 'Porsche',
    model: 'GT3 RS',
    year: 2023,
    price: 285000,
    description: 'Versão track-focused do 911 com motor atmosférico de 525 cv',
    images: ['/uploads/porsche-gt3.jpg']
  },
  {
    brand: 'Audi',
    model: 'R8 V10 Performance',
    year: 2024,
    price: 195000,
    description: 'Superesportivo alemão com motor V10 de 620 cv',
    images: ['/uploads/r8.jpg']
  },
  {
    brand: 'Bugatti',
    model: 'Chiron',
    year: 2023,
    price: 3200000,
    description: 'Hipercarro francês com motor W16 quadriturbo de 1500 cv',
    images: ['/uploads/bugatti-chiron.jpg']
  },
  {
    brand: 'Lamborghini',
    model: 'Urus Performante',
    year: 2024,
    price: 380000,
    description: 'Super SUV italiano com motor V8 biturbo de 666 cv',
    images: ['/uploads/lamborghini-urus.jpg']
  },
  {
    brand: 'Ferrari',
    model: '812 Superfast',
    year: 2023,
    price: 465000,
    description: 'GT esportivo com motor V12 aspirado de 800 cv',
    images: ['/uploads/ferrari-812.jpg']
  },
  {
    brand: 'Ferrari',
    model: 'Roma',
    year: 2024,
    price: 285000,
    description: 'Cupê italiano elegante com motor V8 turbo de 620 cv',
    images: ['/uploads/ferrari-roma.jpg']
  },
  {
    brand: 'Porsche',
    model: 'Taycan Turbo S',
    year: 2024,
    price: 235000,
    description: 'Sedan elétrico de alta performance com 761 cv',
    images: ['/uploads/porsche-taycan.jpg']
  },
  {
    brand: 'Porsche',
    model: 'Panamera Turbo S',
    year: 2023,
    price: 265000,
    description: 'Sedan esportivo alemão com motor V8 biturbo de 630 cv',
    images: ['/uploads/porsche-panamera.jpg']
  },
  {
    brand: 'McLaren',
    model: 'Artura',
    year: 2024,
    price: 285000,
    description: 'Híbrido plug-in com motor V6 e 680 cv combinados',
    images: ['/uploads/mclaren-artura.jpg']
  },
  {
    brand: 'McLaren',
    model: '765LT',
    year: 2023,
    price: 425000,
    description: 'Versão Longtail com motor V8 de 765 cv',
    images: ['/uploads/mclaren-765lt.jpg']
  },
  {
    brand: 'Aston Martin',
    model: 'DB12',
    year: 2024,
    price: 315000,
    description: 'GT britânico luxuoso com motor V8 biturbo de 680 cv',
    images: ['/uploads/aston-db12.jpg']
  },
  {
    brand: 'Aston Martin',
    model: 'DBS 770 Ultimate',
    year: 2023,
    price: 395000,
    description: 'Super GT com motor V12 biturbo de 770 cv',
    images: ['/uploads/aston-dbs.jpg']
  },
  {
    brand: 'Bentley',
    model: 'Continental GT',
    year: 2024,
    price: 285000,
    description: 'Cupê de luxo britânico com motor W12 de 650 cv',
    images: ['/uploads/bentley-continental.jpg']
  },
  {
    brand: 'Bentley',
    model: 'Bentayga Speed',
    year: 2023,
    price: 320000,
    description: 'SUV de luxo mais rápido do mundo com 635 cv',
    images: ['/uploads/bentley-bentayga.jpg']
  },
  {
    brand: 'Rolls-Royce',
    model: 'Phantom',
    year: 2024,
    price: 580000,
    description: 'Ápice do luxo automotivo com motor V12 de 571 cv',
    images: ['/uploads/rolls-phantom.jpg']
  },
  {
    brand: 'Rolls-Royce',
    model: 'Cullinan',
    year: 2023,
    price: 485000,
    description: 'SUV ultra-luxuoso com motor V12 biturbo',
    images: ['/uploads/rolls-cullinan.jpg']
  },
  {
    brand: 'Mercedes-AMG',
    model: 'GT Black Series',
    year: 2023,
    price: 395000,
    description: 'Versão mais extrema do AMG GT com 730 cv',
    images: ['/uploads/amg-gt-black.jpg']
  },
  {
    brand: 'Mercedes-AMG',
    model: 'One',
    year: 2024,
    price: 2750000,
    description: 'Hipercarro híbrido com tecnologia de Fórmula 1 e 1063 cv',
    images: ['/uploads/amg-one.jpg']
  },
  {
    brand: 'Pagani',
    model: 'Huayra R',
    year: 2023,
    price: 3500000,
    description: 'Hipercarro de pista com motor V12 aspirado de 850 cv',
    images: ['/uploads/pagani-huayra.jpg']
  },
  {
    brand: 'Koenigsegg',
    model: 'Jesko Absolut',
    year: 2024,
    price: 3200000,
    description: 'Hipercarro sueco projetado para velocidade máxima de 531 km/h',
    images: ['/uploads/koenigsegg-jesko.jpg']
  },
  {
    brand: 'Maserati',
    model: 'MC20',
    year: 2024,
    price: 285000,
    description: 'Superesportivo italiano com motor V6 Nettuno de 630 cv',
    images: ['/uploads/maserati-mc20.jpg']
  },
  {
    brand: 'Lotus',
    model: 'Emira V6',
    year: 2024,
    price: 125000,
    description: 'Esportivo britânico leve com motor V6 supercharged de 400 cv',
    images: ['/uploads/lotus-emira.jpg']
  },
  {
    brand: 'Lexus',
    model: 'LC 500',
    year: 2023,
    price: 145000,
    description: 'Cupê de luxo japonês com motor V8 de 471 cv',
    images: ['/uploads/lexus-lc500.jpg']
  }
];

async function seedCars() {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/luxcarsdb';
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB\n');

    const user = await User.findOne();
    if (!user) {
      console.log('⚠️  Nenhum usuário encontrado. Criando usuário admin...');
      console.log('❌ Por favor, registre um usuário primeiro em /register');
      process.exit(1);
    }

    console.log('🗑️  Removendo carros antigos...');
    await Car.deleteMany({});

    console.log('📦 Inserindo novos carros...\n');
    for (const carData of luxuryCars) {
      const car = new Car({
        ...carData,
        createdBy: user._id
      });
      await car.save();
      console.log(`✅ ${carData.brand} ${carData.model} - R$ ${carData.price.toLocaleString()}`);
    }

    console.log(`\n✨ ${luxuryCars.length} carros cadastrados com sucesso!`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

seedCars();
