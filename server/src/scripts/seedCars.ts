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
  }
];

async function seedCars() {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/luxcarsdb';
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB\n');

    // Buscar o primeiro usuário para associar os carros
    const user = await User.findOne();
    if (!user) {
      console.log('⚠️  Nenhum usuário encontrado. Criando usuário admin...');
      // Aqui você poderia criar um usuário padrão se necessário
      console.log('❌ Por favor, registre um usuário primeiro em /register');
      process.exit(1);
    }

    // Limpar carros existentes (opcional)
    console.log('🗑️  Removendo carros antigos...');
    await Car.deleteMany({});

    // Inserir novos carros
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
