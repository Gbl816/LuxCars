import { Router, Request, Response } from 'express';
import authRoutes from './auth';
import carsRoutes from './cars';
import uploadRoutes from './upload';

const router = Router();

router.use('/auth', authRoutes);

router.use('/cars', carsRoutes);

router.use('/upload', uploadRoutes);

router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'API is working!' });
});

export default router;