app.factory('sessionFactory', function ($http, $location) {
  var factory = {}
  factory.login  = function (user) {
    $http.post('/login', user).then(function(output) {
    if(output.data){
      $location.url('/wall')
    }
    })
  }
  factory.checkStatus = function (cb) {
    $http.get('/checkstatus').then(function (output) {
      if (!output.data) {
        $location.url('/')
      }else {
        cb(output.data)
      }
    })
  }
  return factory;
})

//  Wall factory
app.factory('wallFactory', function ($http) {
  var factory = {};
  factory.submitNewMessage = function (data, cb) {
    $http.post('/messages/new', data).then(function(output) {
      console.log("WE JUST ADDED A NEW MESSAGE");
      cb(output.data);
    });
  }

  factory.submitNewComment = function (data, cb) {
    $http.post('/comments/new', data).then(function(output) {
      console.log("WE JUST ADDED A NEW COMMENT");
      cb(output.data);
    });
  }

  factory.getAllMeassages = function (cb) {
    $http.get('/messages/all').then(function(output) {
      console.log("WE JUST GOT ALL MESSAGEs");
      cb(output.data);
    });
  }
  factory.getAllComments = function (cb) {
    $http.get('/comments/all').then(function(output) {
      console.log("WE JUST GOT ALL Comments");
      cb(output.data);
    });
  }
  return factory;
})
