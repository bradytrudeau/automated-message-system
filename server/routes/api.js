const express = require('express');
const MessageController = require('../controllers/MessageController');
const SelectController = require('../controllers/SelectController');

const router = express.Router();
const messageController = new MessageController();
const selectController = new SelectController();

router.post('/process-message', (req, res) => {
  try {
    // Handle message processing
    const message = messageController.processMessages(req.body);
    res.send(message);
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

router.get('/select-values', (req, res) => {
  try {
    // Handle fetching of values for select elements
    const values = selectController.fetchSelectValues();
    res.send(values);
  } catch (error) {
    console.error('Error fetching select values:', error);
    res.status(500).json({ error: 'Failed to fetch select values' });
  }
});

module.exports = router;
