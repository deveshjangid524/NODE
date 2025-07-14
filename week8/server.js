const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/', routes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('error:', err.message);
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => console.log(' Server is listening on port 3000'));
