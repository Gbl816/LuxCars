import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes';

dotenv.config();

const app = express();
const port = parseInt(String(process.env.PORT || '5000'), 10);

app.use(cors());
app.use(express.json());

app.use('/api', routes);

function connectWithTimeout(uri: string, ms = 10000) {
  return Promise.race([
    mongoose.connect(uri, { }) as Promise<typeof mongoose>,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Connection timeout')), ms))
  ]);
}

async function start() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/luxcarsdb';

  console.log('Starting server: attempting MongoDB connection to', uri);

  try {
    mongoose.set && mongoose.set('strictQuery', false);

    await connectWithTimeout(uri, 10000);
    console.log('Connected to MongoDB');

    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    console.error('Server will not start until DB is available.');
    process.exit(1);
  }
}

start();