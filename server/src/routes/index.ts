import { Router, Request, Response } from 'express';
import authRoutes from './auth';

const router = Router();

// Auth routes
router.use('/auth', authRoutes);

// Test route
router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'API is working!' });
});

export default router;