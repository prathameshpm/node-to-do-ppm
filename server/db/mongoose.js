var mongoose = require('mongoose');
var configValues = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(database = `mongodb://${configValues.username}:${configValues.password}@ds121494.mlab.com:21494/node-todo-api-am`);

module.exports = {
  mongoose
};
