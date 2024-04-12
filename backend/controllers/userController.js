const promiseHandler = require("../middlewares/promiseHandler");
const userModel = require("../models/user.model");
const CustomError = require("../utils/customError");
const {sendToken, resetToken} = require("../utils/sendToken");

const register = promiseHandler(async (req, res, next) => {
    const {name, email, password} = req.body;
    const avatar = req.file;

    if(!name || !email || !password)
    {
        return next(new CustomError("Please add all field!", 400));
    }

    const userExists = await userModel.findOne({email: email});
    if(userExists)
    {
        return next(new CustomError("User already exists!", 409));
    }

    const newUser = await userModel.create({
        name: name,
        email: email,
        password: password,
        avatar: {
            public_id: 'temp ID',
            url: 'temp URL',
        }
    });

    // upload file

    if(newUser)
    {
        sendToken(res, newUser, "User registered successfully!", 201);
    }
});

const login = promiseHandler(async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password)
    {
        return next(new CustomError('Please add all fields!'), 400);
    }

    const userExists = await userModel.findOne({ email }).select('+password');
    if(!userExists)
    {
        return next('Incorrect email or password!', 404);
    }

    const passwordMatched = userExists.comparePassword(password);

    if(!passwordMatched)
    {
        return next('Incorrect email or password!', 404);
    }
chrcccc
    sendToken(res, userExists, `Welcome back ${userExists.name}`, 200);
});

const logout = promiseHandler(async (req, res, next) => {
    resetToken(res, 'logout successfully', 200);
});

const getMyProfile = promiseHandler(async (req, res, next) => {
    const user = await userModel.findById(req.user._id);

    res.status(200).json({
        success: true,
        message: "Profie",
        user: user,
    })
});

module.exports = {register, login, logout, getMyProfile};