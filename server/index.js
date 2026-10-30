import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = Number(process.env.PORT) || 5000;

if (!process.env.MONGODB_URI) {
  console.error('Missing MONGODB_URI. Copy server/.env.example to server/.env and configure it.');
  process.exit(1);
}
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  console.error('JWT_SECRET must be set in server/.env and contain at least 32 characters.');
  process.exit(1);
}

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173'
}));
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'ApniMandi API is running',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

app.use('/api/auth', authRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error. Please try again later.' });
});

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB connected successfully.');

  app.listen(PORT, () => {
    console.log(`ApniMandi API running at http://localhost:${PORT}`);
  });
} catch (error) {
  console.error('MongoDB connection failed:', error.message);
  process.exit(1);
}
