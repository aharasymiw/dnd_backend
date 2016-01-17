// Schema, dictates how users are saved into mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema(
  {
    dciPlayer: Number,
    characterName: String,
    adventureName: String,
    sessionNum: Number,
    playDate: Date,
    nameDM: String,
    dciDM: Number,
    startingXP: Number,
    deltaXP: Number,
    totalXP: Number,
    staringGold: Number,
    deltaGold: Number,
    totalGold: Number,
    startingDowntime: Number,
    deltaDowntime: Number,
    totalDowntime: Number,
    startingRenown: Number,
    deltaRenown: Number,
    totalRenown: Number,
    startingMagic: Number,
    deltaMagic: Number,
    totalMagic: Number,
    adventureNotes: String,
    dateCreated: Date,
    lastEdited: Date
  }
);

module.exports = mongoose.model('Log', logSchema);

/* Cool things you can do with Schemas
{
  username: {type:String, required: true, index: {unique:true}}
  lastlogin: {type: Date, default: Date.now}
}
*/
