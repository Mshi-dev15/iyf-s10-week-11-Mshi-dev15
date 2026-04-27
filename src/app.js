const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

app.use('/api/posts',postsRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

app.get('/',(req,res)=>{
    res.json({message: 'CommunityHub API is running!'});
});

module.exports = app;