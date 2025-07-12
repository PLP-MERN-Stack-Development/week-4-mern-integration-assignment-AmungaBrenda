const express = require('express');
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');
const { protect, admin } = require('../middleware/auth');
const { validateCategory } = require('../middleware/validation');

const router = express.Router();

router.route('/')
  .get(getCategories)
  .post(protect, admin, validateCategory, createCategory);

router.route('/:id')
  .get(getCategory)
  .put(protect, admin, validateCategory, updateCategory)
  .delete(protect, admin, deleteCategory);

module.exports = router;