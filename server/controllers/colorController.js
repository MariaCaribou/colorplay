const colorModel = require('../models/colorModel');

exports.get = (request, response) => {
    const color = colorModel.find();
    response.json({ color });
}