import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Oi, Thamiles! Você esta quase lá');
});

app.listen(port, () => {
  console.log(`Servidor esta rodando em http://localhost:${port}`);
});