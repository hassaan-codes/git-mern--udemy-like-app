const { Collection } = require("mongoose");
const promiseHandler = require("../middlewares/promiseHandler");
const userModel = require("../models/user.model");
const CustomError = require("../utils/customError");

const buySubscription = promiseHandler(async (req, res, next) => {
    const user = await userModel.findById(req.user._id);
    if(user.role === 'admin') return next(new CustomError("Admin can't buy subscription!", 400));

    // subscription functionality
    user.subscription.id = '';//subscriptionId of payment 
    user.subscription.status = ''; //subscription status of payment

    await user.save();

    res.status(201).json({
        success: true,
        message: 'Subscription purchased successfully!',
    });

    //send post request on paymentverification route
})

const paymentVerification = promiseHandler(async (req, res, next) => {
    const user = await userModel.findById(req.user._id);

    //if(failed)
    {
        //return res.redirect (frontendUrl+'/paymentfailed')
    }

    //add payment info to paymentModel Collection
    //set user subscription status to 'active'
    //save user
    //res.redirect(frontendUrl+'/paymentsuccess?reference=paymentId')
});

const cancelSubscription = promiseHandler(async (req, res, next) => {
    const user = await userModel.findById(req.user._id);
    
    const subscritionId = user.subscription.id;

    let refund = false;

    // cancel subscription with subscription id

    // find payment from payment model by using subscription Id
    //const gap = Date.now() - paymentCreateAt
    //const refundTime = refundDays * 1000*60*60*24;

    // refund if gap is less than refundTime
    // delete paymentInfo from paymentModel

    // refund success response
})

module.exports = { buySubscription, paymentVerification, cancelSubscription };