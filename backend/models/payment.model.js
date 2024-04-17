const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({

},
{
    timestamps:true,
});

const paymentModel = new mongoose.Model('payment', paymentSchema);

module.exports = paymentModel;