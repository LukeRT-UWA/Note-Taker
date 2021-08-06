const express = require('express');
const api = require('./routes/index.js');
const PORT = process.env.port || 3001;
const app = express();




















app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
