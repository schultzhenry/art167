$(document).ready(function() {

  // Add drawings to page, randomizing their
  // x-coordinates and animating dropdown.
  var time = 1000;

  for (let i = 1; i < 11; i++) {
    $('body').append(
      '<img id=\"d' + i +
      '\" src=\"images/' + i +
      '.jpeg\" />'
    );
    $('#d' + String(i)).addClass('d');
    $('#d' + String(i)).addClass('ui-widget-content');
    let xpos = Math.floor(Math.random()*($(window).width()*0.20));
    let ypos = Math.floor(Math.random()*($(window).height()*0.50));
    $('#d' + String(i)).css({
      'left': String(xpos) + 'px',
      'visibility': 'visible'
    });
    setTimeout(function() {
      $('#d' + String(i)).css({
        'transition': 'bottom 2s',
        'bottom': String(ypos) + 'px'
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
