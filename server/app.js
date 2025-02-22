const express = require('express');

const app = express();
app.use(express.json());

const colorRoutes = require('./routes/colorRoutes');

app.use('/api/color', colorRoutes);

module.exports = app;