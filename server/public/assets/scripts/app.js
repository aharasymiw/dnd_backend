$(document).ready(function() {

  fetchCats();

  $('#catform').on('submit', submitCats);

});

function submitCats(e) {
  //console.log('e: ', e);  // e is the click event
  //console.log('this: ' , $(this));  // $(this) is the form

  e.preventDefault();

  var catObject = {};
  catObject.username = $('#username').val();

  $.ajax({
    type: 'POST',
    data: catObject,
    url: '/cat',
    success: function(data) {
      console.log(data);
      fetchCats();
    }
  });
}

function fetchCats() {
  $.ajax({
    type: 'GET',
    url: '/cat',
    success: function(data) {
      appendDom(data);
    }
  });
}

function appendDom(data) {
  $('#container').empty();
  for(var i = 0; i < data.length; i++) {
    $('#container').append('<div></div>');

    var $el = $('#container').children().last();
    $el.append('<p>' + data[i].username + '</p>');
  }
}
