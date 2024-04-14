const express = require('express');
const { register, login, logout, getMyProfile, changePassword, updateProfile, forgotPassword, resetPassword, addToPlaylist, removeFromPlaylist } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/auth');

const userRouter = express.Router();

userRouter.route('/register').post(register);
userRouter.route('/login').post(login);
userRouter.route('/logout').get(isAuthenticated, logout);

userRouter.route('/forgotpassword').post(forgotPassword);
userRouter.route('/resetpassword/:token').post(resetPassword);

userRouter.route('/changepassword').put(isAuthenticated ,changePassword);
userRouter.route('/updateprofile').put(isAuthenticated, updateProfile);

userRouter.route('/me').get(isAuthenticated, getMyProfile);

userRouter.route('/addtoplaylist').post(isAuthenticated, addToPlaylist);
userRouter.route('/removefromplaylist').delete(isAuthenticated, removeFromPlaylist);

module.exports = userRouter;