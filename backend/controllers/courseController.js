const promiseHandler = require('../middlewares/promiseHandler');
const courseModel = require('../models/course.model');
const CustomError = require('../utils/customError');
const getDataUri = require('../utils/dataUri');
const cloudinary = require('cloudinary');

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

    const file = req.file;
    const fileUri = getDataUri(file);
    const cloud = await cloudinary.v2.uploader.upload(fileUri.content, {
        resource_type: "video",
    });

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
            public_id: cloud.public_id,
            url: cloud.secure_url,
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
    const fileUri = getDataUri(file);
    const cloud = await cloudinary.v2.uploader.upload(fileUri.content);

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
            public_id: cloud.public_id,
            url: cloud.secure_url,
        },
    });

    res.status(201).json({
        success: true,
        message: "Course created successfully!",
    })
});

const deleteCourse = promiseHandler(async (req, res, next) => {
    const id = req.params.id;
    const course = await courseModel.findById(id);
    if(!course)
    {
        return next(new CustomError('Course not found!', 403));
    }

    await cloudinary.v2.uploader.destroy(course.poster.public_id);

    for(let i = 0; i < course.lectures.length; i++)
    {
        let lectureId = course.lectures[i].video.public_id;
        await cloudinary.v2.uploader.destroy(lectureId, {
            resource_type: "video",
        });
    }

    await courseModel.deleteOne({_id: id});

    res.status(200).json({
        success: true,
        message: "Course deleted successfully!",
    });
})

const deleteLecture = promiseHandler(async (req, res, next) => {
    const {courseId, lectureId} = req.query;

    const course = await courseModel.findById(courseId);
    if(!course)
    {
        return next(new CustomError('Course not found!', 403));
    }

    const lecture = course.lectures.find(lecture => {
        if(lecture._id.toString() === lectureId.toString()) return lecture;
    });

    await cloudinary.v2.uploader.destroy(lecture.video.public_id, {
        resource_type: "video",
    });

    course.lectures = course.lectures.filter((lecture) => {
        if(lecture._id.toString() !== lectureId.toString()) return lecture;
    })

    course.totalVideos = course.lectures.length;
    await course.save();

    res.status(200).json({
        success: true,
        message: "Lecture deleted successfully!",
    });
});

module.exports = {getAllCourses, createCourse, getCourseLectures, addLectureToCourse, deleteCourse, deleteLecture};