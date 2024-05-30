import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();
const port = 4000;
const mongoUri = 'mongodb://localhost:27017/opus';

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions).then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});
