const jwt = require('jsonwebtoken');
const User = require('../models/user');

//protect routes
const protect = async (req, res, next)=>{
    try{
        const authHeader = req.headers.authorization;
        if


        (!authHeader || !authHeader.startWith('Bearer')){
            return res.status(401).json({error: 'Access denied. No token provided.'});
        }
        const token =authHeader.split(' ')[1];
        const decoded =jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(401).json({error: 'User no longer exists'});
        }
        req.user= user
        next();
    }catch (error){
        if(error.name === 'jsonWebTokenError'){
            return res.status(401).json({error: 'Invalid token'});
        }
        if(error.name ==='TokenExpiredError'){
            return res.status(401).json({error: 'Token expired'});
        }
        next(error);
    }
};

//optional auth
const optionalAuth = async(req, res, next)=>{
    try{
        const authHeader = req.headers.authorization;
        if(authHeader && authHeader.stsrtWith('Bearer')){
            const token = authHeader.split(' ')[1];
            const decode =jwt.verify(token,process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id);
        }
        next();
    }catch(error){
        next();
    }
};

//restrict to specific role
const restrictTo =(...roles)=>{
    return(req,res, next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({error:'You do not have permission to perfom this action'});
        }
        next();
    };
};

module.exports = {protect, optionalAuth, restrictTo};