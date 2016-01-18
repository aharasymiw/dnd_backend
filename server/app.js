var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var jwt = require('jsonwebtoken');
var config = require('./config');

//ROUTES
var index = require('./routes/index');
var characters = require('./routes/characters');
var logs = require('./routes/logs');
var users = require('./routes/users');

//App Settings
app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

//DB Stuff
var appDB = mongoose.connect(config.database).connection;

app.set('superSecret', config.secret);
appDB.once('open', function(err) {
  if(err) {
    console.log('ERROR: ', err);
  }
  console.log('Character Database connected.');
});

app.use('/users', users);
app.use('/api/characters', characters);
app.use('/api/logs', logs);
app.use('/', index);
app.use('/*', index);

app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
