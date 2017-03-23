var app = angular.module('app', ['ngRoute'])
app.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/logreg.html'
  })
  .when('/wall',{
    templateUrl: 'partials/wall.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
