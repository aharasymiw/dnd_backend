var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

//ROUTES
var index = require('./routes/index');
var characters = require('./routes/characters');
var logs = require('./routes/logs');

//App Settings
app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//DB Stuff
var characterURI = 'mongodb://localhost:27017/characters';
// var logURI = 'mongodb://localhost:27017/logs';

var characterDB = mongoose.connect(characterURI).connection;
// var logDB = mongoose.connect(logURI).connection;

characterDB.once('open', function(err) {
  if(err) {
    console.log('ERROR: ', err);
  }
  console.log('Character Database connected.');
});

// logDB.once('open', function(err) {
//   if(err) {
//     console.log('ERROR: ', err);
//   }
//   console.log('Adventure Log Database connected.');
// });
app.use('/characters', characters);
app.use('/logs', logs);
app.use('/', index);
app.use('/*', index);

app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
