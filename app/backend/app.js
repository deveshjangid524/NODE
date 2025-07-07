require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const app = express();

const PORT = process.env.PORT;
connectDB();
app.get('/',(req,res) => {
    res.json({message: "Hello From admin"});
})

app.listen(PORT,() => {
    console.log(`Server is Listening on ${PORT}`)
})
