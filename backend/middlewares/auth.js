const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const CustomError = require('../utils/customError');

const isAuthenticated = async (req, res, next) => {
    const {token} = req.cookies;

    if(!token)
    {
        return next(new CustomError('User not loggedin!', 401));
    }

    const decodedToken = await jwt.decode(token, process.env.JWT_SECRET);
    req.user = await userModel.findOne({_id: decodedToken._id});
    next();
}

const isAdmin = async (req, res, next) => {
    const role = req.user.role;

    if(role !== 'admin')
    {
        return next(new CustomError(`${role} is not allowed to access this resourse`));
    }

    next();
}

module.exports = {isAuthenticated, isAdmin};