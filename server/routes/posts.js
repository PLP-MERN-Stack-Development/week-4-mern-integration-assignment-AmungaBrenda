const express = require('express');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  addComment
} = require('../controllers/postController');
const { protect, admin } = require('../middleware/auth');
const { validatePost } = require('../middleware/validation');

const router = express.Router();

router.route('/')
  .get(getPosts)
  .post(protect, validatePost, createPost);

router.route('/:id')
  .get(getPost)
  .put(protect, validatePost, updatePost)
  .delete(protect, deletePost);

router.route('/:id/comments')
  .post(protect, addComment);

module.exports = router;