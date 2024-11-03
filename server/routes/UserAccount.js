//Routes for UserCatalog
const express = require('express');
const router = express.Router();
const userAccountController = require('../controllers/UserAccount');

// User account routes
router.post('/userAccounts', userAccountController.createUserAccount);
router.get('/userAccounts', userAccountController.getAllUserAccounts);
router.get('/userAccounts/:email', userAccountController.getUserAccountByEmail);
router.get('/userAccounts/:userId', userAccountController.getUserAccountByUserId);
router.get('/userAccounts/:userName', userAccountController.getUserAccountByUserName);
router.put('/userAccounts/:userId', userAccountController.updateUserAccount);
router.delete('/userAccounts/:userId', userAccountController.deleteUserAccount);

module.exports = router;
