// const MongoClient = require('mongodb').MongoClient;
// {foo} is name destructuring
const {MongoClient, ObjectID} = require('mongodb');

// so far no authentication to access mongodb.  Dodgey.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5adfaaffd10678a280d3a146')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Jason'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to count Jason users', err);
  });
  // db.close();
});
