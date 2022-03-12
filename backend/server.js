const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(PORT, () => {
  console.log('App is listening on port', PORT);
});
