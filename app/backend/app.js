require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/',(req,res) => {
    res.json({message: "Hello From admin"});
})

app.listen(PORT,() => {
    console.log(`Server is Listening on ${PORT}`)
})
