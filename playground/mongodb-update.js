// const MongoClient = require('mongodb').MongoClient;
// {foo} is name destructuring
const {MongoClient, ObjectID} = require('mongodb');

// so far no authentication to access mongodb.  Dodgey.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5adffdad2969659e51ff895b')
  // }, {
  //   $set: {
  //     completed: true
  // }}, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // Update user record to my name
  // increment the age by 1
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5adfacc241f5b9a2b542c708')
  }, {
    $set: { name: 'Jason' },
    $inc: { age: 1}
  }, {returnOriginal: false}
  ).then((result) => {
    console.log(result);
  });

  // db.close();
});
