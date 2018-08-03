$(document).ready(function() {

  // Create array of drawings.
  var imgs = [
    '<img id=\"d1\" src=\"images/1.jpg\" />',
    '<img id=\"d2\" src=\"images/2.jpg\" />',
    '<img id=\"d3\" src=\"images/3.jpg\" />',
    '<img id=\"d4\" src=\"images/4.jpg\" />',
    '<img id=\"d5\" src=\"images/5.jpg\" />',
    '<img id=\"d6\" src=\"images/6.jpg\" />',
    '<img id=\"d7\" src=\"images/7.jpg\" />',
    '<img id=\"d8\" src=\"images/8.jpg\" />',
    '<img id=\"d9\" src=\"images/9.jpg\" />',
    '<img id=\"d10\" src=\"images/10.jpg\" />'
  ];

  var time = 1000;

  // Add drawings to page, randomizing their
  // x-coordinates and animating dropdown.
  for (let i = 0; i < imgs.length; i++) {
    $('body').append(imgs[i]);
    $('#d' + String(i)).addClass('d');
    $('#d' + String(i)).addClass('ui-widget-content');
    $('#d' + String(i)).css({
      'left': String(Math.floor(Math.random() * ($(window).width() * 0.20))) + 'px',
      'visibility': 'visible'
    });
    setTimeout(function() {
      $('#d' + String(i)).css({
        'transition': 'bottom 2s',
        'bottom': '0vh'
      });
    }, time);
    time += 500;
  };

  $('.d').css({
    'cursor':'move'
  });

  $(function() {
    $( ".d" ).draggable({
      appendTo: "body"
    });
  });
});
