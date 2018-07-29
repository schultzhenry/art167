$(document).ready(function() {
  var toggle = 0;
  $('#toggleButton').click(function() {
    if (toggle == 0) {
      $('*').css({
        'background': 'transparent'
      })
      $('body').css({
        'filter': 'invert(100%)',
        'background': 'black',
        'transition': 'all 2s'
      });
      $('a').css({
        'color': 'black',
        'border': 'none'
      });
      setTimeout(function() {
        toggle = 1;
        console.log('toggle: ' + toggle);
      }, 500);
      setTimeout(function() {
        $('#webring').css({
          'background': 'white'
        });
      }, 2000);
    } else if (toggle == 1) {
      $('#webring').css({
        'background': 'transparent'
      });
      $('body').css({
        'filter': 'invert(0%)',
        'background': 'white',
        'transition': 'all 2s'
      });
      setTimeout(function() {
        toggle = 0;
        console.log(toggle);
      }, 500);
    }
  });
});
