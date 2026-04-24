require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./src/models/Post');

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');
    
    // Try creating a test post
    const testPost = new Post({
      title: 'Test Post',
      content: 'This is a test post with enough content to pass validation.',
      author: 'Mshi'
    });
    
    const saved = await testPost.save();
    console.log('✅ Post saved:', saved.title);
    
    // Clean up: delete the test post
    await Post.findByIdAndDelete(saved._id);
    console.log('✅ Test post deleted');
    
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });