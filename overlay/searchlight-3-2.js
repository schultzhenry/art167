// searchlight version 3-2:
// large spotlight with 2-second delay

(function() {
  var version = '1.10.2';
  if (window.jQuery === undefined ||
      window.jQuery.fn.jquery < version) {
    var done = !1;
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/'
    script.src += version + '/jquery.min.js';
    script.onload = script.onreadystatechange = function() {
      if (!done &&
         (!this.readyState ||
           this.readyState == 'loaded' ||
           this.readyState == 'complete')) {
        done = !0;
        initBookmarklet(window.jQuery)
      } else {
        console.log('Error loading jQuery.')
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
    if (window.jQuery === undefined ||
        window.jQuery.fn.jquery < version) {
      console.log(':::')
    } else {
    console.log('jquery loaded')
    }
  } else {
    initBookmarklet(window.jQuery)
  }

  function initBookmarklet($) {
    (window.bookmarklet = function() {
      console.log('Searchlight is setting up...');

      $('*').css({
        'color':'black',
        'background':'black',
        'background-color':'black',
        'filter':'brightness(0.0)',
        'text-shadow':'none',
        'border':'none',
        'cursor':'none'
      });

      var textTags = 'h1, h2, h3, h4, h5, h6' +
                     'p, pre, span, a, img';

      $(textTags).css({
        'background-color': 'transparent',
        '-webkit-text-stroke': 'none',
      });

      console.log('Stage set...');

      if (!$('#spot').length) {
        $('body').append('<div id=\'spot\'></div>');
        console.log('Ready!');
      };

      $('#spot').css({
        'position':'fixed',
        'top':'0px',
        'left':'0px',
        'width':'260px',
        'height':'260px',
        'background-color':'white',
        'filter':'blur(30px)',
        'border-radius':'50%',
        'z-index':'1000000',
        'pointer-events':'none'
      });

      onmousemove = function(e) {
        $('#spot').css({
          'left': String(e.clientX - 130) + 'px',
          'top': String(e.clientY - 130) + 'px'
        });
      };

      $('*:not(#spot)').mouseover(function() {
        $(this).css({
          'transition':'all 0.1s',
          'filter':'brightness(1)',
          'color':'white'
        })
      });

      $('*:not(#spot)').mouseleave(function() {
        var tag = $(this);
        setTimeout(function() {
          tag.css({
            'transition':'all 4s',
            'filter':'brightness(0)',
            'text-shadow':'none',
            'color':'black'
          });
        }, 2000);
      });
    })()
  }
})()
