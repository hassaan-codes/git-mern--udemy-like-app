const express = require('express');
const { isAuthenticated } = require('../middlewares/auth');
const { buySubscription, paymentVerification, cancelSubscription } = require('../controllers/paymentController');
const paymentRouter = express.Router();

paymentRouter.route('/subscribe').get(isAuthenticated, buySubscription);
paymentRouter.route('/paymentverification').post(isAuthenticated, paymentVerification);
paymentRouter.route('/subscribe/cancel').delete(isAuthenticated, cancelSubscription);

module.exports = paymentRouter;