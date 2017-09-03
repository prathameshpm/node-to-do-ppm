var mongoose = require('mongoose');
var configValues = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${configValues.username}:${configValues.password}@ds121494.mlab.com:21494/node-todo-api-am` || 'mongodb://localhost:27017/ToDoApp');

module.exports = {
    mongoose
};