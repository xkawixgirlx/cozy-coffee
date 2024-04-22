const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    Date: {
        type: Date,
    },
    postId: {
        type: Number,
        min: 0,
        required: true
    },
    image: {
        type: String,
    },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});