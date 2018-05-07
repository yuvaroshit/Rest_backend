// Dependencies
var express = require('express');
var router = express.Router();

// Users
var User = require('../models/user');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/user');

// Return router
module.exports = router;
