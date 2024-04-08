require('dotenv').config({
    path: './config/config.env'
})
const courseRoutes = require('./routes/courseRoutes')

const express = require('express');
const app = express();

app.use('/api/v1', courseRoutes);

module.exports = {app};