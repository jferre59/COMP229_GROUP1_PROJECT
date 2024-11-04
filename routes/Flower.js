const express = require('express');
const router = express.Router();
const flowerController = require('../controllers/Flower.js');

// Create a new flower
router.post('/flowers', flowerController.createFlower);

// Get all flowers
router.get('/flowers', flowerController.getAllFlowers);

// Update a flower
router.put('/flowers', flowerController.updateFlower);

// Delete a flower
router.delete('/flowers', flowerController.deleteFlower);

module.exports = router;
