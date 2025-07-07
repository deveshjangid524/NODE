const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
