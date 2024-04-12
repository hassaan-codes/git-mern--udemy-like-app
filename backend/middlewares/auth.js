const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

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

module.exports = {isAuthenticated};