const jwt = require('jsonwebtoken');
const SECRET_KEY = 'adsnfasonfdosnfddso';

function verifyToken(req, res, next) {
  const token = req.cookies.token || req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const pureToken = token.startsWith('Bearer ') ? token.slice(7) : token;
    const decoded = jwt.verify(pureToken, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

module.exports = verifyToken;
