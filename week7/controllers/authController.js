const jwt = require('jsonwebtoken');

const SECRET_KEY = 'adsnfasonfdosnfddso';

// Dummy user for example
const user = {
  id: 1,
  username: 'devesh',
  password: 'password123'
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
      expiresIn: '1h'
    });

    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

exports.getProtected = (req, res) => {
  res.json({ message: `Hello ${req.user.username}, you are authenticated!` });
};
