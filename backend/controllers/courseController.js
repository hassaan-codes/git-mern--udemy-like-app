const promiseHandler = require('../middlewares/promiseHandler');
const courseModel = require('../models/course.model');
const CustomError = require('../utils/customError');

const getAllCourses = promiseHandler(async (req, res, next) => {
    const courses = await courseModel.find().select('-lectures');
    
    res.status(200).json({
        success: true,
        message: courses,
    })
});

const createCourse = promiseHandler(async (req, res, next) => {
    const {title, description, category, createdBy} = req.body;
    const file = req.file;

    if(!title || !description || !category || !createdBy)
    {
        return next(new CustomError("Please add all the fields", 400));     
    }
    
    await courseModel.create({
        title: title,
        description: description,
        category: category,
        createdBy: createdBy,
        poster: {
            public_id: 'temp',
            url: 'temp',
        },
    });

    res.status(201).json({
        success: true,
        message: "Course created successfully!",
    })
});

module.exports = {getAllCourses, createCourse};