(function() {
app.controller('CharacterController', ['$scope', '$http',
function($scope, $http) {

  $scope.characters = {};
  $scope.character = {};

  $scope.getCharacter = function() {
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

  $scope.character = {};

  $scope.saveLog = function(log) {
    $http.post('/logs', log)

    .then(function successCallback(response) {
      alert('Log for: ' + $scope.log.date + ' has been saved!');
      $scope.log = {};
    }, function errorCallback(response) {
    });
  };

  $scope.getLog = function(log) {
    $http.get('/logs', config)
    .then(function successCallback(response) {
      console.log('Status: ' + response.status);
    }, function errorCallback(response) {
    });
  };

}]);

})();
