const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Metodo GET
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Metodo POST
app.post('/api/data', (req, res) => {
  const { data } = req.body;
  console.log('Received data:', data);
  res.status(201).json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});