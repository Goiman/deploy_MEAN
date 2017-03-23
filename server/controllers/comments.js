var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');


module.exports = (function functionName() {
  return{
    addComments: function (req, res) {
      console.log(req.body);

      var c = new Comment({content: req.body.content, _user: req.body._user, _message: req.body._message });
      c.save(function(err, data) {
          if(err){
            console.log(err);
            console.log('didnt save')
          } else {
            console.log('saved',data)
            res.json(data)
         }
      })
    },
    getAllComments: function (req, res) {
      Comment.find({}, function (err, data) {
        if (err) {
          console.log("there was an error when getting all comments");
        }else {
          console.log(data);
          res.json(data);
        }
      })
    },
  }
})();
