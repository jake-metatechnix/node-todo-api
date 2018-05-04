var {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/12345667
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // validate that the ID is valid
    // respond with 404 error
    //if(!ObjectID.isValid(id))
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  };

  // findById
  Todo.findById(id).then((todo) => {
    // if no todo, (id not found) then send back a 404 with an empty body
    if(!todo) {
      return res.status(404).send();
    }
    // if todo, then send back
    res.status(200).send({todo});
    // error - send back 400 and no body
  }).catch((e) => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
  // get the Id
  var id = req.params.id;

  // validate the id -> not valid, return 404
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  };
  // remove by Id
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    };
    res.status(200).send({todo});
  }).catch((e) => res.status(400).send());

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {
  app: app
};
