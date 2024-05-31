import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import router from './routes';
import prometheusMiddleware from 'express-prometheus-middleware';
import logger from './logger';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', router);

app.use(prometheusMiddleware({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
}));

app.listen(4000, () => {
  logger.info('Server is running on port 4000');
});

mongoose.connect(process.env.MONGO_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as mongoose.ConnectOptions).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});
