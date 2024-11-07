const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());

const messages = [
  "Hello, World!",
  "Hi there! Welcome to our site.",
  "Greetings, visitor!",
  "Good day! Nice to have you here.",
  "Salutations! Enjoy your stay."
];

// Endpoint per la pagina frontend
app.get('/', (req, res) => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  res.render('index', { message: randomMessage });
});

// Metodo GET API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Metodo POST API
app.post('/api/data', (req, res) => {
  const { data } = req.body;
  console.log('Received data:', data);
  res.status(201).json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
