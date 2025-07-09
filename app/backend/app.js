require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const connectDB = require('./config/database');
const cors = require('cors');
const app = express();
const createHttpError = require('http-errors')
const globalErrorHandler = require('./middleware/globalErrorHandler');
const PORT = config.port;
const cookieParser = require('cookie-parser');
connectDB();

//middlewares

app.use(express.json());
app.use(cors({


    credentials:true,
    origin:['http://localhost:5173']
}
));
app.use(cookieParser());

app.get('/',(req,res) => {
    const error = createHttpError(404,"something went wrng");
    throw error;
    res.json({message: "Hello From admin"});
})

//other Endpoinnts
app.use('/api/user',require('./routes/userRoutes'));
app.use('/api/order',require('./routes/orderRoutes'));
app.use('/api/table',require('./routes/tableRoutes'));
//gloabl error handler

app.use(globalErrorHandler);
app.listen(PORT,() => {
    console.log(`Server is Listening on ${PORT}`)
})
