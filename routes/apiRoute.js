const { Router } = require('express');
const path = require('path');
const router = require('express').Router();

router.get("/", function (request, response) {
  response.send(path.join('../public/index.html'));
});

app.get('./notes', function (request, response) {
  response.send(path.join('../public/notetaker.html'));
});


module.exports = Router;
 