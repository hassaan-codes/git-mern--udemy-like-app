const express = require('express');
const { getAllCourses, createCourse, getCourseLectures, addLectureToCourse, deleteCourse, deleteLecture } = require('../controllers/courseController');
const singleUpload = require('../middlewares/multer');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const courseRouter = express.Router();

courseRouter.route('/courses').get(getAllCourses);

courseRouter.route('/createcourse').post(isAuthenticated, isAdmin, singleUpload, createCourse);

courseRouter.route('/course/:id')
                .get(isAuthenticated, getCourseLectures)
                .post(isAuthenticated, isAdmin, singleUpload, addLectureToCourse)
                .delete(isAuthenticated, isAdmin, deleteCourse);

courseRouter.route('/lecture').delete(isAuthenticated, isAdmin, deleteLecture);

module.exports = courseRouter;