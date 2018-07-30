(function(){
  // This part checks for jQuery
  var version = "1.10.2";
  // Checks for prior inclusion and version
  if (window.jQuery === undefined ||
      window.jQuery.fn.jquery < version) {
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

      $('body').css({'cursor': 'none'});

      // Get initial browser dimensions
      w = $(window).width()
      h = $(window).height()

      // Create jumbotron and apply style
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

      // Create jumbotron cursor and apply style
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

      // Adjust jumbotron on window adjust
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

      // Adjust tinyCursor location when
      // mouse moves
      onmousemove = function(e) {
        // console.log("mouse location:", e.clientX, e.clientY)
        $('#tinyCursor').css({
          'bottom': String((e.clientX / jumbotronFraction) + 3) + "px",
          'bottom': String(((h - e.clientY) / jumbotronFraction) + 3) + "px"
        });
      };
    })();
  }
})();
