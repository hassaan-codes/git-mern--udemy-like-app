const express = require('express');
const { contactUs, requestCourse, getAdminStats } = require('../controllers/otherController');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');
const otherRouter = express.Router();

otherRouter.route('/contact').post(contactUs);
otherRouter.route('/requestcourse').post(requestCourse);
otherRouter.route('/admin/status').get(isAuthenticated, isAdmin, getAdminStats);

module.exports = otherRouter;