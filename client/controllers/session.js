app.controller('sessionController', function ($scope, sessionFactory) {

  sessionFactory.checkStatus(function (data) {
    $scope.curUser = data;
  })

  $scope.login = function () {
    $scope.errors = []

    if (!$scope.user || !$scope.user.name || $scope.user.name.length < 3) {
      $scope.errors.push('Input should be at least 3 characters long ')
    }
    else if ($scope.user.name.length > 20) {
      $scope.errors.push('Input should be less then 20 characters long')
    }
    else {
      sessionFactory.login($scope.user)
      $scope.user = {}  // clear input
    }
  }
})


  // ****************  wall Controller  *****************
  app.controller('wallController', function ($scope, sessionFactory,wallFactory, $location) {
    sessionFactory.checkStatus(function (data) {
      $scope.curUser = data;
      $scope.messages = [];

      if (!data._id) {
        $location.url('/')
      }
  })

  wallFactory.getAllMeassages(function (output) {
    $scope.messages = output;
  })

  $scope.submitNewMessage = function() {
    $scope.newMessage._user = $scope.curUser._id;
    console.log($scope.newMessage);

    // run the factory to save the new Message
    wallFactory.submitNewMessage($scope.newMessage, function (output) {
      console.log(output);
      $scope.messages = output;
    })

    $scope.newMessage = {};
  }

  $scope.submitNewComment = function (id, content) {

    var newComment = {};
    newComment._user = $scope.curUser._id;
    newComment.content = content;
    newComment._message = id;

    console.log(newComment);

    // run the factory method to save the new comment
    wallFactory.submitNewComment(newComment, function (output) {
      console.log(output);
      index()
    })

  }
  var index = function() {
    wallFactory.getAllComments(function (output) {
      $scope.comments = output;
    })
  }
  index()

})
