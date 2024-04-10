const promiseHandler = require("../middlewares/promiseHandler");
const userModel = require("../models/user.model");
const CustomError = require("../utils/customError");
const sendToken = require("../utils/sendToken");

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

module.exports = {register}