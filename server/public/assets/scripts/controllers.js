(function() {
app.controller('CharacterController', ['$http', function($http) {

  console.log('Character Controller Active.');
  this.character = {};

  function saveCharacter() {
    console.log('Clicked');
  }

}]);
})();
