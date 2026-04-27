const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const commentsController = require('../controllers/commentsController');
const { protect } = require('../middleware/auth');


// 📝 Post routes
router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/', protect, postsController.createPost);
router.put('/:id', protect, postsController.updatePost);
router.delete('/:id', protect, postsController.deletePost);
router.post('/:id/like', protect, postsController.likePost);

// 💬 Comment routes (nested under posts)
router.get('/:postId/comments', commentsController.getComments);
router.post('/:postId/comments', commentsController.createComment);
router.delete('/:postId/comments/:commentId', commentsController.deleteComment);

module.exports = router;