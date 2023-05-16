const express = require('express');
const MessageController = require('../controllers/MessageController');

const router = express.Router();
const messageController = new MessageController();

router.post('/process-message', (req, res) => {
  // Handle message processing
});

module.exports = router;
