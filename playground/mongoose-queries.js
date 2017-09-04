const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./../server/db/mongoose');
const Todo = require('./../server/models/todo');
const user = require('./../server/models/user');

// var id = "59ab9762eac9b342207de6f7";

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todoByID) => {
//     if (!Todo) {
//         console.log('ID not found');
//     }
//     console.log('TodoByID', todoByID);
// }).catch((e) => console.log(e));

user.findById('59aaba25655fc727f4a22c96').then((User) => {
  if (!user) {
    console.log('ID not found');
  }
  console.log(JSON.stringify(User, undefined, 2));
}).catch((e) => console.log(e));
