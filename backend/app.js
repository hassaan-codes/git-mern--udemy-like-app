require('dotenv').config({
    path: './config/config.env'
})

const express = require('express');
const app = express();

module.exports = {app};