const colorModel = require('../models/colorModel');

exports.generatePalette = (request, response) => {
    const { type, count } = request.body;
    const palette = colorModel.generatePalette(type, count);
    response.json({ palette });
}