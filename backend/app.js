require('dotenv').config({
    path: './config/config.env'
})
const errorHandler = require('./middlewares/errorHandler');
const courseRoutes = require('./routes/courseRoutes')

const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));

app.use('/api/v1', courseRoutes);
app.use('/api/v1', userRouter);

module.exports = {app};

app.use(errorHandler);