$(document).ready(function() {
  $('#toggleButton').click(function() {
    $('#backgroundVideo').css('filter', 'invert(0%) blur(6px) brightness(0.8)');
    $('button').css('color', 'yellow');
    $('span').css('color', 'yellow');
    $('a').css('color', 'yellow');
  });
});
