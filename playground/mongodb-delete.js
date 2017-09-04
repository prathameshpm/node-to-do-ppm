const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('ToDos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //     console.log(result);
  // });

  // deleteOne
  // db.collection('ToDos').deleteOne({text: 'Eat lunch'}).then((result) => console.log(result));

  // findOneAndDelete
  // db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => console.log(result));

  // db.collection('Users').deleteMany({name: 'Jack'}).then((result) => {
  //     console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59a931509eb52ab119504817')
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
