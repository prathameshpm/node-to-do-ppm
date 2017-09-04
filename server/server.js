const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {
  ObjectId
} = require('mongodb');

var {
  mongoose
} = require('./db/mongoose');
var ToDo = require('./models/todo');
var User = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new ToDo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  ToDo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {

  var id = req.params.id;

  if (!ObjectId.isValid(id)) {
    res.status(400);
  }

  ToDo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send(todo);
    }
    res.status(200).send({
      todo
    });
  }).catch((e) => res.status(400).send(null));
});

app.delete('/todos/:id', (req, res) => {

  var id = req.params.id;

  if (!ObjectId.isValid(id)) {
    res.status(400);
  }

  ToDo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      res.status(404).send(todo);
    }
    res.status(200).send({
      todo
    });
  }).catch((e) => res.status(400).send(null));
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectId.isValid(id)) {
    res.status(400);
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  ToDo.findByIdAndUpdate(id, {
    $set: body
  }, {
    new: true
  }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({
      todo
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {
  app
};
