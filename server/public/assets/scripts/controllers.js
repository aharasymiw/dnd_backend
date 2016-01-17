(function() {
  app.controller('CharacterController', ['$scope', '$http',
  function($scope, $http) {

    $scope.characters = {};
    $scope.character = {};

    $scope.getCharacters = function() {
      $scope.characters = {};

      $http.get('/characters')
      .then(function successCallback(response) {
        $scope.characters = response;
      }, function errorCallback(response) {
      });
    };

    $scope.saveCharacter = function(character) {
      $http.post('/characters', character)
      .then(function successCallback(response) {
        alert($scope.character.characterName + ' has been saved!');
        $scope.character = {};
      }, function errorCallback(response) {
      });
    };
  }]);

  app.controller('LogController', ['$scope', '$http',
  function($scope, $http) {

    $scope.logs = {};
    $scope.log = {};

    $scope.getLogs = function() {
      $scope.logs = {};

      $http.get('/logs')
      .then(function successCallback(response) {
        $scope.logs = response;
      }, function errorCallback(response) {
      });
    };

    $scope.saveLog = function(log) {
      $http.post('/logs', log)
      .then(function successCallback(response) {
        alert('Log for ' + $scope.log.playDate + ' has been saved!');
        $scope.log = {};
      }, function errorCallback(response) {
      });
    };
  }]);
})();
