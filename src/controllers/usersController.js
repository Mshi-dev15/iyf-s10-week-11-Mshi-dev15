const User = require('../models/User');
const Post = require('../models/Post');

//get user
const getMe = async (req, res, next)=>{
    try{
        const user = await User.findById(req.user.id);
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        });
    }catch (error){
        next(error);
    }
};
//update profile
const updateMe = async(req,res,next)=>{
    try{
        const{username, email} = req.body;
        const user = await User.findByIdAndUpdate(
            req.user.id,
            {username, email},
            {new: true, runValidators: true}
        );
        res.json({
            id: user._id,
            username: user.username,
            email: user.email
        });
    }catch(error){
        next(error);
    }
};

//get user post
const getUserPosts = async (req, res, next)=>{
    try{
        const posts = await Post.find({author: req.params.id})
        .populate('author', 'username')
        .sort({createdAt: -1});
        res.json(posts);
    }catch(error){
        next(error);
    }
};

module.exports = {getMe, updateMe, getUserPosts};
