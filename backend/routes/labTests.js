const express = require('express');
const router = express.Router();
const labTestController = require('../controllers/labTestController');

// Routes for lab tests
router.get('/', labTestController.getAllLabTests);

module.exports = router;
