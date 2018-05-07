// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    name: String,
    password: String,
    DBname: String
});

// Return user
module.exports = restful.model('Users', userSchema);
