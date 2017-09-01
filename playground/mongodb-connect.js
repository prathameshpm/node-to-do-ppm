// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// ES6 Object De-structure
//
// var user = {name: 'Prathamesh', age: 23};
// var {name} = user;
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('ToDos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unbale to insert To-Do', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    db.collection('Users').insertOne({
        name: 'Prathamesh',
        age: 23,
        location: 'Pune, Maharashtra, India'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User data', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});