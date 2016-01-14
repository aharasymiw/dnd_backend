var express = require('express');
var router = express.Router();
var path = require('path');

var mongoose = require('mongoose');
var Character = require('../models/characters');

//Need to bring in a Schema
//Need a way to write a 'character' to the database
//Need a way to retrieve characters from the database

router.get('/', function(req, res) {
  Character.find({}, function(err, data) {
    if(err) {
      console.log('Error: ', err);
    }
    res.send(data);
  });
});

router.post('/', function(req, res) {
  console.log(req.body.charactername);

  var character = new Character();
  character.charactername = req.body.charactername;

  character.save(function(err, data) { //Node methods always have access to err as a first parameter, and mongoose returns data as a second
    if(err) {
      console.log('Error: ', err);
    }

    res.send(data); // Inside the save function, because it will run before save otherwise.
  });
});

router.put('/', function(req, res) {

});

router.delete('/', function(req, res) {

});

module.exports = router;
