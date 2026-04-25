import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Jasa Sekitar Kamu API' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
