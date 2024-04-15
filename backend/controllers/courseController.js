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

const getCourseLectures = promiseHandler(async (req, res, next) => {
    const course = await courseModel.findById(req.params.id);
    if(!course)
    {
        return next(new CustomError('Course not found!', 404));
    }

    course.views += 1;
    await course.save();

    res.status(200).json({
        success: true,
        lectures: course.lectures,
    })
})

const addLectureToCourse = promiseHandler(async (req, res, next) => {
    
    const course = await courseModel.findById(req.params.id);
    if(!course)
    {
        return next(new CustomError('Course not found!', 404));
    }

    const {title, description} = req.body;
    //const file = req.file;

    if(!title || !description)
    {
        return next(new CustomError('Please add all field!', 401));
    }

    course.lectures.push({
        title,
        description,
        video:{
            public_id: 'temp',
            url: 'temp',
        }
    });
    
    course.totalVideos = course.lectures.length;
    await course.save();

    res.status(200).json({
        success: true,
        message: "Lecture has been added",
    });
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

module.exports = {getAllCourses, createCourse, getCourseLectures, addLectureToCourse};