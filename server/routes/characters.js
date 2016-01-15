// Server Character Router
var express = require('express');
var router = express.Router();
var path = require('path');

var mongoose = require('mongoose');
var Character = require('../models/characters');

//Need to bring in a Schema
//Need a way to write a 'character' to the database
//Need a way to retrieve characters from the database

/*router.get('/:id', function(req, res) {
  Character.find({}, function(err, data) {
    if(err) {
      console.log('Error: ', err);
    }
    res.send(data);
  });
});
*/

router.get('/', function(req, res) {
  Character.find({}, function(err, characters) {
    if(err) {
      console.log('Error: ', err);
    }
    console.log(characters);
    res.send(characters);
  });
});

router.post('/', function(req, res) {
  var currentTime = Date.now();
  req.body.lastEdited = currentTime;
  req.body.dateCreated = currentTime;
  console.log(req.body);

  var character = new Character();

  Character.create(req.body, function(err, small) {
    if (err) {return handleError(err);}
    res.send();
  });
});

router.put('/', function(req, res) {

});

router.delete('/', function(req, res) {

});

module.exports = router;
