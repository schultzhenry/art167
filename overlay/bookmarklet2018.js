(function(){
  // This part checks for jQuery
  var version = "1.10.2";
  // Checks for prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
    // If there isn't an instance of jQuery, create one and append it to the head
    // Else run our bookmarklet!
    var done = false;
    var script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
    script.onload = script.onreadystatechange = function() {
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
              done = true;
              initBookmarklet(window.jQuery);
      } else {
        console.log('error loading');
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
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

      $('*').css({
        'background': 'black',
        'background-color': 'black',
        'color': 'black'
      });

      $('body').css({
        'background': 'black',
        'background-color': 'black',
        'color': 'black',
        'cursor': 'none'
      });

      $(textTags).mouseover(function() {
        $(this).css({
          'transition': 'all 0.5s',
          'text-shadow': '0px 0px 60px Blue',
          'text-shadow': '0px 0px 28px LightCyan',
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
          '-moz-box-shadow': '0 0 20px Violet, 0 0 60px Cyan, 0 0 80px Blue',
          '-webkit-box-shadow': '0 0 20px Violet, 0 0 60px Cyan, 0 0 80px Blue',
          'box-shadow': '0 0 20px Violet, 0 0 60px Cyan, 0px 0px 80px Blue'
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

      // var all = $("*");
      //
      // for (var i=0, max=all.length; i < max; i++) {
      //   var element = all[i]
      //   console.log(element.textContent)
      // }

      // Get browser window and height
      w = $(window).width()
      h = $(window).height()

      // Create background blob
      var bgBlobSize = 180;
      var bgBlobStyle = {
        "position": "fixed",
        "top": "0px",
        "left": "0px",
        "width": "260px",
        "height": "260px",
        "background-color": "LightCyan",
        "filter": "blur(140px)",
        "border-radius": "50%",
        "z-index": "-1"
      };
      var bgBlobId = "id=\'bgBlob\'";
      var bgBlobTag = "<div " + bgBlobId + "></div>";

      // If background blob doesn't exist, create
      if (!$('#bgBlob').length) {
        $('body').append(bgBlobTag);
        $('#bgBlob').css(bgBlobStyle);
      }


      var jumbotron = "<div id=\'jumbotron\'></div>";
      var jumbotronFraction = 6;
      var jumbotronStyle = {
        "border": "1px solid white",
        "z-index": "1000000000",
        "background-color": "black",
        "position": "fixed",
        "bottom": "4px",
        "left": "4px",
        "width": String(w / jumbotronFraction),
        "height": String(h / jumbotronFraction)
      }

      $('body').append(jumbotron);
      $('#jumbotron').css(jumbotronStyle);

      var tinyCursor = "<div id=\'tinyCursor\'></div>";
      var tinyCursorStyle = {
        "position": "fixed",
        "width": "4px",
        "height": "4px",
        "background-color": "white",
        "border-radius": "50%",
        "left": "4px",
        "bottom": "4px",
        "z-index": "1000000000000"
      };

      $('body').append(tinyCursor);
      $('#tinyCursor').css(tinyCursorStyle);

      window.onresize = function(event) {
        w = $(window).width()
        h = $(window).height()
        jumbotronWidth = w / jumbotronFraction;
        jumbotronHeight = h / jumbotronFraction;
        $('#jumbotron').css({
          "width": String(jumbotronWidth) + "px",
          "height": String(jumbotronHeight) + "px"
        });
      };

      onmousemove = function(e) {
        // console.log("mouse location:", e.clientX, e.clientY)
        $('#bgBlob').css({
          "left": String((e.clientX - (260 / 2))) + "px",
          "top": String((e.clientY - (260 / 2)) + "px")
        });
        $('#tinyCursor').css({
          "left": String((e.clientX / jumbotronFraction) + 3) + "px",
          "bottom": String(((h - e.clientY) / jumbotronFraction) + 3) + "px"
        });
      }
    })();
  }
})();
