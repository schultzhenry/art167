$(document).ready(function() {
  $('#toggleButton').click(function() {
    $('body').css({
      'filter': 'invert(100%)',
      'background': 'black'
    });
  });
});
