const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5aec988861c97d0b68f86937'}).then((todo) => {

});


Todo.findByIdAndRemove('5aec988861c97d0b68f86937').then((todo) => {
  console.log(todo);
});
