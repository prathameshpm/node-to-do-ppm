const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('ToDos').find({
  //     _id: new ObjectID('59a902be9eb52ab119504217')
  // }).toArray().then((docs) => {
  //     console.log('ToDos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });

  // db.collection('ToDos').find().count().then((count) => {
  //     console.log(`ToDos count: ${count}`);
  // }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name: 'Prathamesh'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  // db.close();
});
