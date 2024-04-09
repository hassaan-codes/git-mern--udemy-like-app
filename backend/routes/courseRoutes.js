const express = require('express');
const { getAllCourses, createCourse } = require('../controllers/courseController');
const courseRouter = express.Router();

courseRouter.route('/courses').get(getAllCourses);

courseRouter.route('/createcourse').post(createCourse);

module.exports = courseRouter;