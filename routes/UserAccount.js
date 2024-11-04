//Routes for UserCatalog
const express = require('express');
const router = express.Router();
const userAccountController = require('../controllers/UserAccount');

// User account routes
router.post('/user', userAccountController.createUserAccount);
router.get('/user', userAccountController.getAllUserAccounts);
router.put('/user/:userId', userAccountController.updateUserAccount);
router.delete('/user/:userId', userAccountController.deleteUserAccount);

module.exports = router;
