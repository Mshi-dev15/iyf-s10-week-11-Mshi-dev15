const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Comment content is required'],
        maxlength: [500, 'Comment cannot exceed 500 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: [true, 'Post ID is required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);