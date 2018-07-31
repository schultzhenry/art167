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

  // Searchlight function.
  function initBookmarklet($) {
    (window.bookmarklet = function() {

      // First, make page dark.
      var textTags = 'h1, h2, h3, h4, h5, h6,' +
                     'p, pre, span, a, img';
      $('*').css({
        'color': 'black',
        'background': 'black',
        'background-color': 'black',
        'text-shadow': 'none',
        'border': 'none',
        'cursor': 'none'
      });

      $(textTags).css({
        'background-color': 'transparent',
      });

      $('img, hr, svg').css({
        'filter': 'brightness(0.0)'
      });

      // Second, create spotlight.
      // In case of multiple bookmarklet runs,
      // check for existence of spotlight before
      // appending it to page. Reapply style.
      if (!$('#spot').length) {
        $('body').append('<div id=\'spot\'></div>');
      }
      $('#spot').css({
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
      });

      // When mouse moves, update spotlight position.
      onmousemove = function(e) {
        $('#spot').css({
          'left': String(e.clientX - 130) + 'px',
          'top': String(e.clientY - 130) + 'px'
        });
      }

      // // Hover effects o for text-related elements.
      // $('*').mouseover(function() {
      //   $(this).css({
      //     'transition': 'all 0.2s',
      //     'text-shadow': '0 0 12px white, 0 0 2px white',
      //     'color': 'white'
      //   });
      // });
      // $('*').mouseleave(function() {
      //   var tag = $(this);
      //   setTimeout(function() {
      //     tag.css({
      //       'transition': 'all 4s',
      //       'text-shadow': 'none',
      //       'color': 'black'
      //     });
      //   }, 4000);
      // });

      $('*:not(#spot)').mouseover(function() {
        $(this).css({
          'transition': 'all 0.2s',
          'filter': 'brightness(1)',
          'text-shadow': '0 0 12px white, 0 0 2px white',
          'color': 'white'
        });
      });

      $('*:not(#spot)').mouseleave(function() {
        var tag = $(this);
        setTimeout(function() {
          tag.css({
            'transition': 'all 4s',
            'filter': 'brightness(0)',
            'text-shadow': 'none',
            'color': 'black'
          });
        }, 4000);
      });
    })();
  }
})();
