const mongoose =require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters'],
        maxlength: [200, 'Content must be atleast 2oo characters']
    },
    content:{
         type: String,
        required: [true, 'Content is required'],
        minlength: [10, 'Content must be at least 10 characters']
        
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,'Author is required']
    },
    likes:{
        type: Number,
        default: 0
    },
    tags: [{
        type: String,
        trim: true
    }],
    published:{
        type: Boolean,
        default: true
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},{
    timestamps: true

});

postSchema.index({title: 'text', content: 'text'});

postSchema.method.like=function(author){
    return this.find({author: new RegExp(author, 'i')});
};

//const commentsController = require('../controllers/commentsController');
//router.get('/:postId/comments', commentsController.getComments);
//router.post('/:postId/comments', commentsController.createComment);
//router.delete('/postId/comments/:commentId', commentsController.deletecomment);

module.exports =mongoose.model('Post', postSchema);