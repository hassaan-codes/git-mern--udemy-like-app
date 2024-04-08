const express = require('express');
const { getAllCourses } = require('../controllers/courseController');
const courseRouter = express.Router();

courseRouter.route('/courses').get(getAllCourses);

module.exports = courseRouter;