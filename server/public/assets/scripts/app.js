var app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: '/assets/views/routes/home.html',
      //controller: 'SomeController'
    }).when('/character', {
      templateUrl: '/assets/views/routes/character.html',
      controller: 'CharacterController'
    }).when('/character/new', {
      templateUrl: '/assets/views/routes/newCharacter.html',
      controller: 'CharacterController'
    }).when('/character/view', {
      templateUrl: '/assets/views/routes/viewCharacter.html',
      controller: 'CharacterController'
    }).when('/character/edit', {
      templateUrl: '/assets/views/routes/editCharacter.html',
      controller: 'CharacterController'
    }).when('/log', {
      templateUrl: '/assets/views/routes/log.html',
      controller: 'LogController'
    }).when('/log/new', {
      templateUrl: '/assets/views/routes/newLog.html',
      controller: 'LogController'
    }).when('/log/view', {
      templateUrl: '/assets/views/routes/viewLog.html',
      controller: 'LogController'
    }).when('/log/edit', {
      templateUrl: '/assets/views/routes/editLog.html',
      controller: 'LogController'
    }).
    otherwise({
      redirectTo: 'home'
    });

  $locationProvider.html5Mode(true);

}]);
