const express = require('express');
const { getAllCourses, createCourse, getCourseLectures, addLectureToCourse } = require('../controllers/courseController');
const singleUpload = require('../middlewares/multer');
const courseRouter = express.Router();

courseRouter.route('/courses').get(getAllCourses);

courseRouter.route('/createcourse').post(singleUpload, createCourse);

courseRouter.route('/course/:id')
                .get(getCourseLectures)
                .post(singleUpload, addLectureToCourse);

module.exports = courseRouter;