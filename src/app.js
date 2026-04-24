const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

const postsRouter = require('./routes/posts');
const authRoutes = require('./routes/auth');

app.use('/api/posts',postsRouter);
app.use('/api/auth', authRoutes)

app.get('/',(req,res)=>{
    res.json({message: 'CommunityHub API is running!'});
});

module.exports = app;