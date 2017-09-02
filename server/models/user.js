var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});


// var user = new User ({
//     email: 'mahamulkarprathamesh@gmail.com     '
// });


// user.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });

module.exports = {User};