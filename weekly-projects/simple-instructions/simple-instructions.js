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
    let xpos = Math.floor(Math.random()*20);
    let ypos = Math.floor(Math.random()*60);
    let rot = Math.floor(Math.random()*90);

    $('#d' + String(i)).css({
      'left': String(xpos) + 'vw',
      'visibility': 'visible',
      'transform':'rotate('+String(rot)+'deg)'
    });

    // Wait a half second before dropping
    // each drawing to its final position
    // on the page.
    setTimeout(function() {
      $('#d' + String(i)).css({
        'transition':'bottom 2s',
        'bottom':'Calc('+String(ypos)+'vh + 12vh)'
      });
    }, time);
    time += 500;
  };

  // Make each drawing draggable.
  $(function() {
    $( ".d" ).draggable({
      appendTo: "body"
    });
  });
});
