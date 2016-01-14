// Schema, dictates how users are saved into mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema(
  {
    //key: valueType,
    logname: String
  }
);

module.exports = mongoose.model('Log', logSchema);

/* Cool things you can do with Schemas
{
  username: {type:String, required: true, index: {unique:true}}
  lastlogin: {type: Date, default: Date.now}
}
*/
