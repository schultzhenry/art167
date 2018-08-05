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

  $(document).on('input', '#light', function() {
    var light = $(this).val();
    var timer = $('#timer').val();

    console.log("brightness changed to " + String(light));
    console.log("timer set to " + String(timer));

    if (light == 1 && timer == 1) {
      $("#dragme").attr("href", "javascript:(function(){document.head.appendChild(document.createElement('script')).src='searchlight-light1-timer1.js';})();");
      console.log("lowest brightness loaded");
    }
  });
});
