// create web server
const express = require('express');
const app = express();
const port = 3000;

// load comments
const comments = require('./comments.json');

// serve comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// listen on port 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});