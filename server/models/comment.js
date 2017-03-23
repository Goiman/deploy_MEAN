var mongoose = require('mongoose');
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  content: {type: String, required: true, minlength: 3},
  _user: {type: String, ref: 'User'},
  _message: {type: String, ref: 'Message'}
},{timestamps:true})
mongoose.model('Comment', CommentSchema);
