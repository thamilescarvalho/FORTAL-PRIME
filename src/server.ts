import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import cartRoutes from './routes/cartRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

app.get('/', (req, res) => {
  res.send('Oi, Thamiles! A FORTAL PRIME esta quase nascendo.');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});