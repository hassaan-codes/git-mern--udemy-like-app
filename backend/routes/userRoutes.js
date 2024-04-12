const express = require('express');
const { register, login, logout, getMyProfile } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/auth');

const userRouter = express.Router();

userRouter.route('/register').post(register);
userRouter.route('/login').post(login);
userRouter.route('/me').get(isAuthenticated, getMyProfile);

userRouter.route('/logout').get(logout);


module.exports = userRouter;