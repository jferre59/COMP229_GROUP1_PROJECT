const express = require('express');
const router = express.Router();
const flowerController = require('../controllers/Flower.js');

// Create a new flower
router.post('/flowers', flowerController.createFlower);

// Get all flowers
router.get('/flowers', flowerController.getAllFlowers);
// Get a flower by id
router.get('/flowers/:flowerId', flowerController.getFlowerById);

// Update a flower
router.put('/flowers/:flowerId', flowerController.updateFlower);

// Delete a flower
router.delete('/flowers/:flowerId', flowerController.deleteFlower);

module.exports = router;
