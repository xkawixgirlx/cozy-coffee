const mongoose = require('mongoose');
const Schema = mongoose.Schema;




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
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});



module.exports = mongoose.model('Post', postSchema);