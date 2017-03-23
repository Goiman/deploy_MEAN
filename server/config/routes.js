var user = require('./../controllers/session.js');
var messages = require('./../controllers/messages.js');
var comments = require('./../controllers/comments.js');


module.exports = function (app) {
  app.post('/login',function (req, res) {
    user.login(req, res);
  })
  app.get('/checkstatus', function(req, res) {
    user.checkStatus(req, res)
  })
  app.get('/logout', function (req, res) {
    console.log("about to log out");
    user.logout(req, res)
  })

  //  Message routes
  app.get('/messages/all',function (req, res) {
    messages.getAllMeassages(req, res);
  })
  app.post('/messages/new',function (req, res) {
    messages.addMessage(req, res);
  })


  // Comment  routes
  app.post('/comments/new',function (req, res) {
    comments.addComments(req, res);
  })

  app.get('/comments/all',function (req, res) {
    comments.getAllComments(req, res);
  })

}
