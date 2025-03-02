const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

router.post('/generatePalette', colorController.generatePalette);

module.exports = router;