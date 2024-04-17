const express = require('express');
const { register, login, logout, getMyProfile, changePassword, updateProfile, forgotPassword, resetPassword, addToPlaylist, removeFromPlaylist, updateProfilePic, getAllUsers, updateUserRole, deleteUser, deleteSelf } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const singleUpload = require('../middlewares/multer');

const userRouter = express.Router();

userRouter.route('/register').post(singleUpload, register);
userRouter.route('/login').post(login);
userRouter.route('/logout').get(isAuthenticated, logout);

userRouter.route('/forgotpassword').post(forgotPassword);
userRouter.route('/resetpassword/:token').post(resetPassword);

userRouter.route('/changepassword').put(isAuthenticated ,changePassword);
userRouter.route('/updateprofile').put(isAuthenticated, updateProfile);

userRouter.route('/updateprofilepic').put(isAuthenticated, singleUpload, updateProfilePic)

userRouter.route('/me')
            .get(isAuthenticated, getMyProfile)
            .delete(isAuthenticated, deleteSelf);

userRouter.route('/addtoplaylist').post(isAuthenticated, addToPlaylist);
userRouter.route('/removefromplaylist').delete(isAuthenticated, removeFromPlaylist);

//-------- Admin Routes
userRouter.route('/admin/users').get(isAuthenticated, isAdmin, getAllUsers);
userRouter.route('/admin/user/:id')
            .put(isAuthenticated, isAdmin, updateUserRole)
            .delete(isAuthenticated, isAdmin, deleteUser);


module.exports = userRouter;