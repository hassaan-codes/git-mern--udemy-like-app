require('dotenv').config({
    path: './config/config.env'
})
const errorHandler = require('./middlewares/errorHandler');
const courseRoutes = require('./routes/courseRoutes')

const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1', courseRoutes);

module.exports = {app};

app.use(errorHandler);