(function(){
  // Check for jQuery.
  // Set version for check.
  var version = '1.10.2';
  // If there isn't an instance of jQuery,
  // create one and append it to the head.
  if (window.jQuery === undefined ||
      window.jQuery.fn.jquery < version) {
    var done = false;
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/'
    script.src += version + '/jquery.min.js';
    script.onload = script.onreadystatechange = function() {
      if (!done &&
          (!this.readyState ||
           this.readyState == 'loaded' ||
           this.readyState == 'complete')) {
        done = true;
        initBookmarklet(window.jQuery);
      } else {
        console.log('Error loading jQuery.');
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
    if (window.jQuery === undefined ||
        window.jQuery.fn.jquery < version) {
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

      // Create searchlight.
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

      var textTags = 'h1, h2, h3, h4, h5, h6' +
                     ' p, pre, span, a, img';

      $('*').css({
        'color': 'black',
        'background': 'black',
        'background-color': 'black',
        'border': 'none'
      });

      $('html, body, div').css({
        'cursor': 'none',
        'background': 'black',
        'background-color': 'black'
      });

      $(textTags).css({
        'background-color': 'transparent',
      });

      // If searchlight already on, reapply style.
      if ($('#spot').length) {
        $('#spot').css(spotStyle);
      }

      $(textTags).mouseover(function() {
        $(this).css({
          'transition': 'all 0.5s',
          'text-shadow': '0px 0px 60px white',
          'text-shadow': '0px 0px 28px white',
          'color': 'white'
        });
      });

      $(textTags).mouseleave(function() {
        var tag = $(this);
        setTimeout(function() {
          tag.css({
            'transition': 'all 4s',
            'text-shadow': 'none',
            'color': 'black'
          });
        }, 3000);
      });

      $('img, hr, svg').css({
        'filter': 'brightness(0.0)',
        'z-index': '1000000000000'
      });
      $('img, hr, svg').mouseover(function() {
        $(this).css({
          'transition': 'all 0.5s',
          'filter': 'brightness(1)',
          // '-moz-box-shadow': '0 0 80px white',
          // '-webkit-box-shadow': '0 0 80px white',
          // 'box-shadow': '0 0 80px white'
        });
      });
      $('img, hr, svg').mouseleave(function() {
        var tag = $(this);
        setTimeout(function() {
          tag.css({
            'transition': 'all 4s',
            'filter': 'brightness(0)'
          });
        }, 3000);
      });

      // In case of multiple bookmarklet runs,
      // check for existence of spotlight before
      // adding element.
      if (!$('#spot').length) {
        $('body').append('<div id=\'spot\'></div>');
        $('#spot').css(spotStyle);
      }

      onmousemove = function(e) {
        $('#spot').css({
          'left': String((e.clientX - (260 / 2))) + 'px',
          'top': String((e.clientY - (260 / 2)) + 'px')
        });
      }
    })();
  }
})();
