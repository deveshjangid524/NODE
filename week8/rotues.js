const express = require('express');
const multer = require('multer');
const path = require('path');
const weatherService = require('./weatherService');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

//  File Upload Route
router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ message: 'File uploaded', file: req.file });
});

// Weather API Route
router.get('/weather/:city', async (req, res, next) => {
  try {
    const data = await weatherService.getWeather(req.params.city);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
