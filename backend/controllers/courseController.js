const courseModel = require('../models/course.model');

const getAllCourses = async (req, res) => {
    const courses = await courseModel.find();
    res.status(200).json({
        success:true,
        courses,
    });
}

module.exports = {getAllCourses};