import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Car from '../models/Car';

dotenv.config();

// Map based on brand + model keywords
function getImageForCar(brand: string, model: string): string | null {
  const combined = `${brand} ${model}`.toLowerCase();
  
  if (combined.includes('huracan') || combined.includes('hurac')) return '/uploads/huracan.jpg';
  if (combined.includes('f8')) return '/uploads/ferrari-f8.jpg';
  if (combined.includes('sf90')) return '/uploads/ferrari-sf90.jpg';
  if (combined.includes('720')) return '/uploads/mclaren-720s.jpg';
  if (combined.includes('p1')) return '/uploads/mclaren-p1.jpg';
  if (combined.includes('911')) return '/uploads/porsche-911.jpg';
  if (combined.includes('gt3')) return '/uploads/porsche-gt3.jpg';
  if (combined.includes('r8')) return '/uploads/r8.jpg';
  if (combined.includes('aventador')) return '/uploads/aventador.jpg';
  if (combined.includes('chiron')) return '/uploads/bugatti-chiron.jpg';
  
  return null;
}

async function updateImages() {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/luxcarsdb';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    const cars = await Car.find();
    
    for (const car of cars) {
      const imagePath = getImageForCar(car.brand, car.model);
      if (imagePath && (!car.images || car.images.length === 0)) {
        car.images = [imagePath];
        await car.save();
        console.log(`✅ Updated ${car.brand} ${car.model} with image`);
      }
    }

    console.log('\n✨ All cars updated!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

updateImages();
