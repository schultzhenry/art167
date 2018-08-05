$(document).ready(function() {
  $('#bottom-links, #dragme').css({
    'filter': 'brightness(0)'
  });
  setTimeout(function() {
    $('#dragme').css({
      'transition': 'filter 1s',
      'transition-timing-function': 'ease-in-out',
      'filter': 'brightness(1)'
    });
  }, 500);
  setTimeout(function() {
    $('#bottom-links').css({
      'transition': 'filter 2s',
      'transition-timing-function': 'ease-in-out',
      'filter': 'brightness(1)'
    });
  }, 1500);

  var searchlight = []
  $("#dragme").attr("href", "javascript:(function(){document.head.appendChild(document.createElement('script')).text='https://schultzhenry.github.io/summer2018-yale-interactive/overlay/searchlight.js';})();")
});
