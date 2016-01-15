(function() {
app.controller('CharacterController', ['$scope', '$http',
function($scope, $http) {

  $scope.character = {};

  $scope.saveCharacter = function(character) {
    $http.post('/characters', character)

    .then(function successCallback(response) {
      alert($scope.character.characterName + ' has been saved!');
      $scope.character = {};
    }, function errorCallback(response) {
    });
  };

  $scope.getCharacter = function(character) {
    $http.get('/characters', config)
    .then(function successCallback(response) {
      console.log('Status: ' + response.status);
      alert($scope.character.characterName + ' has been saved!');
      $scope.character = {};
    }, function errorCallback(response) {
    });
  };

}]);
})();
