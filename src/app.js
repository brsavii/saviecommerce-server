
import express from 'express';

const app = express();

// mock
const products = [
    { id: 1, name: 't-shirt' },
    { id: 2, name: 'shirt' }
];

app.get('/', (req, res) => {
  res.send('SAVI COMMERCE');
});

app.get('/products', (req, res) => {
    res.status(200).send(products);
});

export default app;