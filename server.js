const express = require('express');
const api = require('./routes/index.js');
const PORT = process.env.port || 3001;
const app = express();
const path = require('path');
const { userInfo } = require('os');

app.use(express.static('public'))

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
















app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
