// routes for UserSession
const express = require('express');
const router = express.Router();
const userSessionController = require('../controllers/userSession');

// User session routes
router.post('/session', userSessionController.createUserSession);
router.get('/session/:token', userSessionController.getUserSessionByToken);
router.put('/session/:sessionId', userSessionController.updateUserSession);
router.delete('/session/:sessionId', userSessionController.deleteUserSession);

module.exports = router;
