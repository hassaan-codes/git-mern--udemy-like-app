const promiseHandler = require('../middlewares/promiseHandler.middleware');
const courseModel = require('../models/course.model');
const CustomError = require('../utils/customError');

const getAllCourses = promiseHandler(async (req, res, next) => {
    const courses = await courseModel.find();
    
    next(new CustomError("Test Error", 60098));
});

module.exports = {getAllCourses};