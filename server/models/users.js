// Schema, dictates how users are saved into mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  userName: String,
  dciUser: Number,
  password: String,
  dm: Boolean,
  admin: Boolean
}));
