// const MongoClient = require('mongodb').MongoClient;
// {foo} is name destructuring
const {MongoClient, ObjectID} = require('mongodb');

// so far no authentication to access mongodb.  Dodgey.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // Delete all documents with a duplicate name
  // Use findOneAndDelete and to pull a doc and delete it by _id
  db.collection('Users').deleteMany({name: 'Jason'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5adff194c66985a3b8e21403')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })

  // db.close();
});
