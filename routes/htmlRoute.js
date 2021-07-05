const path = require('path');
const app = require('express').App();

app.get("/", function (request, response) {
  response.send(path.join('../public/index.html'));
});

app.get('./notes', function (request, response) {
  response.send(path.join('../public/notetaker.html'));
});


module.exports = app;
 