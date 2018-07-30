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

      $('html').css({
        'background': 'black'
      });
      $('*:not(body)').css({
        'color': 'black'
      });
      $('body').css({
        'cursor': 'none',
        'background': 'transparent'
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
        'filter': 'brightness(0.0)'
      });

      $('img').mouseover(function() {
        $(this).css({
          'transition': 'all 0.5s',
          'filter': 'brightness(1)',
          '-moz-box-shadow': '0 0 20px white, 0 0 60px white, 0 0 80px white',
          '-webkit-box-shadow': '0 0 20px white, 0 0 60px white, 0 0 80px white',
          'box-shadow': '0 0 20px white, 0 0 60px white, 0px 0px 80px white'
        });
      });
      $('img').mouseleave(function() {
        $(this).css({
          'transition': 'all 4s',
          'filter': 'brightness(0)',
          '-moz-box-shadow': 'none',
          '-webkit-box-shadow': 'none',
          'box-shadow': 'none'
        });
      });

      // Get browser window and height
      w = $(window).width()
      h = $(window).height()

      // Create background blob
      var bgBlobSize = 180;
      var bgBlobStyle = {
        'position': 'fixed',
        'top': '0px',
        'left': '0px',
        'width': '260px',
        'height': '260px',
        'background-color': 'LightCyan',
        'filter': 'blur(140px)',
        'border-radius': '50%',
        'z-index': '-1'
      };
      var bgBlobTag = '<div id=\'bgBlob\'></div>';

      // Check for existence then add
      if (!$('#bgBlob').length) {
        $('body').append(bgBlobTag);
        $('#bgBlob').css(bgBlobStyle);
      }

      window.onresize = function(event) {
        w = $(window).width()
        h = $(window).height()
      };

      onmousemove = function(e) {
        // console.log('mouse location:', e.clientX, e.clientY)
        $('#bgBlob').css({
          'left': String((e.clientX - (260 / 2))) + 'px',
          'top': String((e.clientY - (260 / 2)) + 'px')
        });
      }
    })();
  }
})();
