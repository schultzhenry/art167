(function(){
  // This part checks for jQuery
  var version = '1.10.2';
  // Checks for prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
    // If there isn't an instance of jQuery, create one and append it to the head
    // Else run our bookmarklet!
    var done = false;
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/' + version + '/jquery.min.js';
    script.onload = script.onreadystatechange = function() {
      if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
              done = true;
              initBookmarklet(window.jQuery);
      } else {
        console.log('error loading');
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
    if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
      console.log(':::');
    } else {
      console.log('jquery loaded');
    }
  } else {
    initBookmarklet(window.jQuery);
  }

  // My bookmarklet function
  function initBookmarklet($) {
    (window.bookmarklet = function() {

      var textTags = 'h1, h2, h3, h4, h5, h6, p, pre, span, a, img';

      $('*:not(body)').css({
        'color': 'black'
      });

      $('html, body, div').css({
        'cursor': 'none',
        'background': 'black',
        'background-color': 'black'
      });

      $(textTags).mouseover(function() {
        $(this).css({
          'transition': 'all 0.5s',
          'text-shadow': '0px 0px 60px white',
          'text-shadow': '0px 0px 28px white',
          'color': 'white'
        });
      });
      $(textTags).mouseleave(function() {
        $(this).css({
          'transition': 'all 4s',
          'text-shadow': 'none',
          'color': 'black'
        });
      });

      $('img').css({
        'filter': 'brightness(0.0)',
        'z-index': '1000000000000'
      });
      $('img').mouseover(function() {
        $(this).css({
          'transition': 'all 0.5s',
          'filter': 'brightness(1)',
          '-moz-box-shadow': '0 0 80px white',
          '-webkit-box-shadow': '0 0 80px white',
          'box-shadow': '0 0 80px white'
        });
      });
      $('img').mouseleave(function() {
        setTimeout(function(){
          $(this).css({
            'transition': 'all 3s',
            'filter': 'brightness(0)',
            '-moz-box-shadow': 'none',
            '-webkit-box-shadow': 'none',
            'box-shadow': 'none'
          });
        }, 1000);
      });

      // Get browser window and height
      w = $(window).width()
      h = $(window).height()

      // Create background blob
      var spotSize = 180;
      var spotStyle = {
        'position': 'fixed',
        'top': '0px',
        'left': '0px',
        'width': '260px',
        'height': '260px',
        'background-color': 'white',
        'filter': 'blur(30px)',
        'border-radius': '50%',
        'z-index': '1000000',
        'pointer-events': 'none'
      };

      // Check for existence then add
      if (!$('#spot').length) {
        $('body').append('<div id=\'spot\'></div>');
        $('#spot').css(spotStyle);
      }

      window.onresize = function(event) {
        w = $(window).width()
        h = $(window).height()
      };

      onmousemove = function(e) {
        // console.log('mouse location:', e.clientX, e.clientY)
        $('#spot').css({
          'left': String((e.clientX - (260 / 2))) + 'px',
          'top': String((e.clientY - (260 / 2)) + 'px')
        });
      }
    })();
  }
})();
