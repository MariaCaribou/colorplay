const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

router.post('/getPalette', colorController.getPalette);
router.post('/getPaletteColor', colorController.getPaletteColor);

module.exports = router;