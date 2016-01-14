// Schema, dictates how users are saved into mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var characterSchema = new Schema(
  {
    //key: valueType,
    charactername: String
  }
);

module.exports = mongoose.model('Character', characterSchema);

/* Cool things you can do with Schemas
{
  username: {type:String, required: true, index: {unique:true}}
  lastlogin: {type: Date, default: Date.now}
}
*/
