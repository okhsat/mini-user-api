import express from 'express';
import morgan from 'morgan';
import { userRoutes } from '@routes/user.routes';
import { errorHandler } from '@middlewares/error.middleware';

export const app = express();

app.use(express.json());          // body parsing
app.use(morgan('dev'));           // logging

app.get('/', (_req, res) => {
  res.send(`
    <h1>🚀 Mini User API</h1>
    <p>Node.js / Express.js Demo/Test</p>
  `);
});
app.use('/users', userRoutes);    // routes

app.use(errorHandler);            // global error handler