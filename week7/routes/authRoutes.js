const express = require('express');
const { login, getProtected } = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/login', login);
router.get('/protected', verifyToken, getProtected);

module.exports = router;
