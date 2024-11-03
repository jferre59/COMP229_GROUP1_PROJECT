//Routes for Vendor
const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/Vendor');

// Vendor routes
router.post('/vendors', vendorController.createVendor);
router.get('/vendors', vendorController.getAllVendors);
router.get('/vendors/:vendorId', vendorController.getVendorById);
router.put('/vendors/:vendorId', vendorController.updateVendor);
router.delete('/vendors/:vendorId', vendorController.deleteVendor);

module.exports = router;
