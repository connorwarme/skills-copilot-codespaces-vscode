// Create web server to handle comments
// 1. load express module
var express = require('express');
// 2. create express object
var app = express();
// 3. create a route for GET request
app.get('/comments', function(req, res) {
  res.send('This is a GET request for /comments');
});
// 4. create a route for POST request
app.post('/comments', function(req, res) {
  res.send('This is a POST request for /comments');
});
// 5. create a route for PUT request
app.put('/comments', function(req, res) {
  res.send('This is a PUT request for /comments');
});
// 6. create a route for DELETE request
app.delete('/comments', function(req, res) {
  res.send('This is a DELETE request for /comments');
});
// 7. start the server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
// 8. test the server using curl
//    curl -X GET http://localhost:3000/comments
//    curl -X POST http://localhost:3000/comments
//    curl -X PUT http://localhost:3000/comments
//    curl -X DELETE http://localhost:3000/comments
// 9. test the server using web browser