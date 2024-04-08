const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        validate: validator.isEmail(),
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [6, "Password must contain minimum 6 characters!"],
        select: false,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    subscription: {
        id:{
            type: String,
        },
        status:{
            type: String,
        }
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    playlist: [
        {
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
            },
            poster: {
                type: String,
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now, 
    },

    resetPasswordToken: String,
    resetPasswordExpire: String,
})

const userModel = mongoose.Model('User', userSchema);

module.exports = userModel;