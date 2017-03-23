var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = (function functionName() {
  return{

    getAllMeassages: function (req, res) {
      Message.find({}).populate([{path : '_user'},{path : '_comments', populate : {path : '_user'}}]).exec(function(err, m){
        if (err) {
          console.log("there was an error when getting all messages");
        }else {
          console.log(m);
          res.json(m);
        }
      });
    },

    addMessage: function (req, res) {
      console.log(req.body);

      var m = new Message({content: req.body.content, _user: req.body._user})
      m.save(function (err) {
        if (err) {
          console.log("there was an error when saving a message");
        }else {
          console.log(m);

          res.redirect('/messages/all');

        }
      })
    }
  }
})();
