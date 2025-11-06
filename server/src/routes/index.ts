import { Router, Request, Response } from 'express';
import authRoutes from './auth';
import carsRoutes from './cars';

const router = Router();

router.use('/auth', authRoutes);

router.use('/cars', carsRoutes);

router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'API is working!' });
});

export default router;