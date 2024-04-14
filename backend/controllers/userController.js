const promiseHandler = require("../middlewares/promiseHandler");
const courseModel = require("../models/course.model");
const userModel = require("../models/user.model");
const CustomError = require("../utils/customError");
const sendEmail = require("../utils/sendEmail");
const {sendToken, resetToken} = require("../utils/sendToken");
const crypto = require('crypto');

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
        return next(new CustomError('Incorrect email or password!', 404));
    }

    const passwordMatched = await userExists.comparePassword(password);

    if(!passwordMatched)
    {
        return next(new CustomError('Incorrect email or password!', 404));
    }
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

const changePassword = promiseHandler(async (req, res, next) => {
    const {oldPassword, newPassword} = req.body;
    
    if(!oldPassword || !newPassword)
    {
        return next(new CustomError('Please add all fields', 400));
    }
    
    const user = await userModel.findById(req.user._id).select('+password');

    const passwordMatched = await user.comparePassword(oldPassword);
    if(!passwordMatched)
    {
        return next(new CustomError('Old password is incorrect!', 401));
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({
        success: true,
        message: "Password changed successfully!",
    })
});

const updateProfile = promiseHandler(async (req, res, next) => {
    const {name, email} = req.body;

    const user = await userModel.findById(req.user._id);

    if(name)
    {
        user.name = name;
    }
    if(email)
    {
        user.email = email;
    }

    await user.save();

    res.status(200).json({
        success: true,
        message: "Profile updated successfully!",
        user: user,
    });
});

const forgotPassword = promiseHandler(async (req, res, next) => {
    const {email} = req.body;
    if(!email)
    {
        return next(new CustomError('Please enter email!', 401));
    }
    const user = await userModel.findOne({email});

    if(!user)
    {
        return next(new CustomError("User doesn't exist!", 404));
    }

    const resetToken = await user.getResetToken();

    await user.save();

    const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
    const message = `Click on the link to reset your password ${url}. If you didn't send this request then please ignore this email.`;
    sendEmail(user.email, "UdemyReplica Password Reset", message);

    res.status(200).json({
        success: true,
        message: "An email with link to reset password has been sent to " + user.email,
    });
});

const resetPassword = promiseHandler(async (req, res, next) => {
    const {token} = req.params;
    const hashedToken = await crypto.createHash('sha256').update(token).digest('hex');

    const user = await userModel.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpire: {
            $gt: Date.now(),
        }
    });

    if(!user)
    {
        return next(new CustomError('Link has been expired!', 401));
    }

    const {password} = req.body;

    if(!password)
    {
        return next(new CustomError('Please enter the password'));
    }

    user.password = password;
    user.resetPasswordToken = "";
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({
        success: true,
        message: "Password changed successfully!",
    });
});

const addToPlaylist = promiseHandler(async (req, res, next) => {
    const user = await userModel.findById(req.user._id);
    
    const {id} = req.body;
    const course = await courseModel.findById(id);

    if(!course)
    {
        return next(new CustomError('Course not found Or Invalid course Id!', 404));
    }

    const alreadyAdded = user.playlist.find((item) => {
        if(item.course.toString() === course._id.toString())
        {
            return true;
        }
    })

    if (alreadyAdded)
    {
        return next(new CustomError('Course already added!', 409));
    }

    user.playlist.push({
        course: course._id,
        poster: course.poster.url,
    })

    await user.save();

    res.status(200).json({
        success: true,
        message: "Added to playlist!",
    });
})

const removeFromPlaylist = promiseHandler(async (req, res, next) => {
    const user = await userModel.findById(req.user._id);
    
    const courseId = req.query.id;
    const newPlaylist = user.playlist.filter((item) => {
        if(item.course.toString() !== courseId.toString())
        {
            return item;
        } 
            
    });


    user.playlist = newPlaylist;
    await user.save();

    res.status(200).json({
        success: true,
        message: 'Removed from playlist!',
    });
})

module.exports = {register, login, logout, getMyProfile, changePassword, updateProfile, forgotPassword, resetPassword, addToPlaylist, removeFromPlaylist}; 