// routes for Category
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/Category');

// Category routes
router.post('/category', categoryController.createCategory);
router.get('/category', categoryController.getAllCategories);
router.put('/category/:categoryId', categoryController.updateCategory);
router.delete('/category/:categoryId', categoryController.deleteCategory);

module.exports = router;
