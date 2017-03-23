var mongoose = require('mongoose');
var Schema = mongoose.Schema

var MessageSchema = new Schema({
  content: {type: String, required: true, minlength: 3},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
},{timestamps:true})
mongoose.model('Message', MessageSchema);
