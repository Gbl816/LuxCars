import { Router, Request, Response } from 'express';
import Car from '../models/Car';
import auth, { AuthRequest } from '../middleware/auth';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar carros' });
  }
});

router.post('/', auth, async (req: AuthRequest, res: Response) => {
  try {
    const { brand, model, year, price, description, images } = req.body;
    const createdBy = req.userId;
    const car = new Car({ brand, model, year, price, description, images, createdBy });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar carro' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Carro não encontrado' });
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar carro' });
  }
});

export default router;
