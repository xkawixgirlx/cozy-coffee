const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    Date: {
        type: Date,
    },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});



const postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    Date: {
        type: Date,
    },
    coffeeType: {
        type: String,
        enum: ['Light Roast', 'Medium Roast', 'Dark Roast', 'Matcha', 'Chai', 'Tea']
    },
    image: {
        type: String,
    },
    comments: [commentSchema],
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});



module.exports = mongoose.model('Post', postSchema);