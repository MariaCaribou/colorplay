const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

// GET the specified user
router.get('/', colorController.get);

module.exports = router;