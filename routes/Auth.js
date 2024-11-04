// routes for Auth
const express = require('express');
const router = express.Router();
const { signin, signout, hasAuthorization, requireSignin } = require('../controllers/auth');

// Authentication routes
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;