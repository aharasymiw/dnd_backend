var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: '/assets/views/routes/home.html',
      //controller: 'SomeController'
    }).
    when('/character', {
      templateUrl: '/assets/views/routes/character.html',
      controller: 'CharacterController as charControle'
    }).
    when('/log', {
      templateUrl: '/assets/views/routes/log.html',
      //controller: 'AnotherController'
    }).
    otherwise({
      redirectTo: 'home'
    });
}]);
