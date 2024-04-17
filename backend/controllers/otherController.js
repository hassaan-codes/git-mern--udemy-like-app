const promiseHandler = require("../middlewares/promiseHandler");
const sendEmail = require("../utils/sendEmail");


const contactUs = promiseHandler(async (req, res, next) => {
    const {name, email, message} = req.body;

    if(!name || !email || !message)
    {
        return next(new CustomError('All fields are required!', 401));
    }

    const to = process.env.MY_MAIL;
    const subject = "Contact from udemy replica";
    const text = `test message from this guy named ${name}.\n${message}`;

    await sendEmail(to, subject, text);

    res.status(200).json({
        success: true,
        message: "Your email has been sent!",
    });
});

const requestCourse = promiseHandler(async (req, res, next) => {
    const {name, email, course} = req.body;
    
    if(!name || !email || !course)
    {
        return next(new CustomError('All fields are required!', 401));
    }

    const to = process.env.MY_MAIL;
    const subject = "Request for a course on udemy replica";
    const text = `course request from this guy named ${name}.\n${course}`;

    await sendEmail(to, subject, text);

    res.status(200).json({
        success: true,
        message: "Your request has been sent!",
    });
})

const getAdminStats = promiseHandler(async (req, res, next) => {

})

module.exports = { contactUs, requestCourse, getAdminStats };