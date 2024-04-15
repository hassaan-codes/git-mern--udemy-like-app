const express = require('express');
const { getAllCourses, createCourse, getCourseLectures, addLectureToCourse } = require('../controllers/courseController');
const courseRouter = express.Router();

courseRouter.route('/courses').get(getAllCourses);

courseRouter.route('/createcourse').post(createCourse);

courseRouter.route('/course/:id')
                .get(getCourseLectures)
                .post(addLectureToCourse);

module.exports = courseRouter;