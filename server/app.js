const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: false }));

const colorRoutes = require('./routes/colorRoutes');

app.use('/api/color', colorRoutes);

module.exports = app;