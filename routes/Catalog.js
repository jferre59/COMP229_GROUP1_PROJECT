//Routes for Catalog

const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/Catalog');

// Catalog routes
router.post('/catalog', catalogController.createCatalogEntry);
router.get('/catalog', catalogController.getAllCatalogEntries);
router.put('/catalog/:itemId', catalogController.updateCatalogEntry);
router.delete('/catalog/:itemId', catalogController.deleteCatalogEntry);

module.exports = router;