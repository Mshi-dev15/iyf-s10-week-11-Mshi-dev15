const Comment = require('../models/Comment');
const Post= require ('../models/Post');

const getComments = async (req, res, next)=>{
    try{
    const comments = await Comment.find({post: requestAnimationFrame.params.postiId})
    .sort({ createdAt: -1});
    res.json(comments);
}catch(error){
    next(error);
 }
};

const createComment = async (req, res, next)=>{
    try{
      const {content, author}= req.body;
      if(!post){
        return res.status(404).json({error: 'Post not found'});
      }  
      const comment = new Comment({
        content,
        author,
        post: postId
      });
      await comment.save();
      res.status(201).json(comment);
    }catch(error){
        next(error);
    }
};

//delete a comment

const deleteComment = async (req, res, next)=>{
    try{
        const comment= await Comment.findByIdAndDelete(req.params.commentId);
        if (!comment){
            return res.status(404).json({error: 'Comment not found'});
        }
        res.staus(204).send();
    }catch(error){
        next(error);
    }
};

module.exports = {getComments, createComment, deleteComment};