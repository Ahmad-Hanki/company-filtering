import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import companiesRouter from './routes/companiesRoutes';
const app = express();

app.use(express.json());

// Routes
app.use('/api', companiesRouter);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
