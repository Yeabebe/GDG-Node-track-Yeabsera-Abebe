import express from 'express';
import morgan from 'morgan';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

// Global middleware
app.use(express.json());
app.use(morgan('dev')); // logs every request BEFORE routes

// Routes
app.use('/books', bookRoutes);

export default app;
