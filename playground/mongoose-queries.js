const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5ae0cc53aa823e28af738fbc';
//
// if(!ObjectID.isValid(id)) {
//   console.log('id not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // findOne returns the first matching result only
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('id not found');
//   }
//   console.log('TodoById', todo);
// }).catch((error) => console.log(error));

// query users collection
// grab an id of user Object
// load in the User model
// user.findById to query for ID
// handle the three cases where user not found, user is found, and some other error occurs

id = '5ae0a9b294d27feba914e418';
User.findById(id).then((user) => {
  if(!user) {
    return console.log('user not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
