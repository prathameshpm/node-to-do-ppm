var mongoose = require('mongoose');

var ToDo = mongoose.model('ToDo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }

   // ,
  // user: {
  //     type: String,
  //     require: true,
  //     minlength: 1,
  //     trim: true
  // },
  // email: {
  //     type: String,
  //     require: true,
  //     minlength: 1,
  //     trim: true
  // }
});

// var newToDo = new ToDo({
//     text: 'Cook Dinner'
// });

// var newToDo = new ToDo({
// text: 'Have Dinner',
// completed: true,
// completedAt: 2135
// text: '  Have coffee   '
// text: true
// user: 'Prathamesh',
// email: 'abcd@xyz.com',
// text: 'to do object text'
// });

// newToDo.save().then((doc) => {
//     // console.log('Saved ToDo', doc);
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save ToDo', e);
// });

module.exports = ToDo;
