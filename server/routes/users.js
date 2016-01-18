// Server Users Router
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Character = require('../models/users');

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if(err) {return handleError(err);}
    res.send(users);
  });
});

router.post('/', function(req, res) {

  var user = new User();

  User.create(req.body, function(err, data) {
    if (err) {return handleError(err);}
    res.send(data);
  });
});

router.put('/', function(req, res, next) {

});

router.delete('/', function(req, res, next) {

});

module.exports = router;
