import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import companiesRouter from './routes/companiesRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173', // your frontend origin
    credentials: true, // allow cookies if needed
  }),
);

// Routes
app.use('/api', companiesRouter);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
