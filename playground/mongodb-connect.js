// const MongoClient = require('mongodb').MongoClient;
// {foo} is name destructuring
const {MongoClient, ObjectID} = require('mongodb');

// so far no authentication to access mongodb.  Dodgey.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // insert new doc into Users collection (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Jason',
  //   age: 44,
  //   location: 'Layton, UT'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
