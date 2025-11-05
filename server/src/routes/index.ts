import { Router, Request, Response } from 'express';
import authRoutes from './auth';
import carsRoutes from './cars';

const router = Router();

// Auth routes
router.use('/auth', authRoutes);

// Cars routes
router.use('/cars', carsRoutes);

// Test route
router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'API is working!' });
});

export default router;