require('dotenv').config({
    path: './config/config.env'
})
const errorHandler = require('./middlewares/errorHandler');
const courseRoutes = require('./routes/courseRoutes')

const express = require('express');
const userRouter = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const paymentRouter = require('./routes/paymentRoutes');
const otherRouter = require('./routes/otherRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));
app.use(cookieParser());

app.use('/api/v1', courseRoutes);
app.use('/api/v1', userRouter);
app.use('/api/v1', paymentRouter);
app.use('/api/v1', otherRouter);

module.exports = {app};

app.use(errorHandler);