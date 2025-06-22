const express = require('express');
const app = express();

app.use(express.json());

// Home 
app.get('/', (req, res) => {
  res.send('Welcome to My Basic Express Server!');
});

// About 
app.get('/about', (req, res) => {
  res.send('This server is built using Express.js');
});

// GET users (dummy data)
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Devesh' },
    { id: 2, name: 'Jangid' }
  ];
  res.json(users);
});


// error handler
app.use((req, res) => {
  res.status(404).send('Route not found');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
