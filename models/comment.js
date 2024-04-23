const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const commentSchema = new Schema({
    comment: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: date,
    },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});



module.exports = mongoose.Model('Comments', commentSchema);