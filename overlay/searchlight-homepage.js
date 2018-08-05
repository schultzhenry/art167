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

  $("#dragme").attr("href", "javascript:(function()" +
                    "{document.head.appendChild" +
                    "(document.createElement('script'))" +
                    ".src='searchlight.js';})();");

  $(document).on('input', '#light, #timer', function() {
    var light = $('#light').val();
    var timer = $('#timer').val();
    console.log("light: " + String(light) + "\t timer: " + String(timer));

    if (light == 1 && timer == 1) {
      $("#dragme").attr("href", "javascript:(function(){document.head.appendChild(document.createElement('script')).src='searchlight-1-1.js';})();");
      console.log("linking to searchlight-1-1.js");
    } else if (light == 1 && timer == 2) {
      $("#dragme").attr("href", "javascript:(function(){document.head.appendChild(document.createElement('script')).src='searchlight-1-2.js';})();");
      console.log("linking to searchlight-1-2.js");
    }
  });
});
