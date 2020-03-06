const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v0.1',
  });
});

app.get('/users', (request, response) => {
  response.send([{
    name: 'Eric',
    age: 30,
  }, {
    name: 'Andrew',
    age: 25,
  }, {
    name: 'Jen',
    age: 36,
  }]);
});

app.listen(3000);

module.exports.app = app;
