import express from 'express';
import logger from './middleware/logger.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

app.use(express.json());
app.use(logger); // apply global logger

app.use('/books', bookRoutes);

export default app;
