var express = require('express');
var router = express.Router();
var path = require('path');

var mongoose = require('mongoose');
var User = require('../models/users');

//Need to bring in a Schema
//Need a way to write a 'user' to the database
//Need a way to retrieve users from the database

router.get('/', function(req, res) {
  User.find({}, function(err, data) {
    if(err) {
      console.log('Error: ', err);
    }
    res.send(data);
  });
});

router.post('/', function(req, res) {
  console.log(req.body.username);

  var user = new User();
  user.username = req.body.username;

  user.save(function(err, data) { //Node methods always have access to err as a first parameter, and mongoose returns data as a second
    if(err) {
      console.log('Error: ', err);
    }

    res.send(data); // Inside the save function, because it will run before save otherwise.
  });

});

module.exports = router;
