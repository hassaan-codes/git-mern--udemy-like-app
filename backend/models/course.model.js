const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Tile is required!'],
        minLength: [5, 'Title must contain atleast 10 characters!'],
        maxLength: [80, 'Title must not be longer than 30 characters!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [20, 'Description must contain atleast 30 characters!'],
    },
    lectures: [
        {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            video:{
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        },
    ],
    poster: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    views: {
        type: Number,
        default: 0,
    },
    totalVideos: {
        type: Number,
        default: 0,

    },
    category: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: [true, 'Creater name is required!'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const courseModel = mongoose.Model('Course', courseSchema);

module.exports = courseModel;