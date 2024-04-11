const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        validate: [validator.isEmail, "Email is invalid!"],
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

userSchema.pre('save', async function (next) {
    if(this.isModified('password'))
    {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    }
});
userSchema.methods.getJwtToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '15d'
        },
    )
}
userSchema.methods.comparePassword = function () {
    
}


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;