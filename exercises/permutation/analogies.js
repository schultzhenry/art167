$(document).ready(function() {
  // Emojis from http://getemoji.com/
  var emojis = [ "💀", "💩", "🌂", "👑", "🕶",
                 "👖", "👣", "👁", "💦", "🍇",
                 "🍼", "🍴", "🧀", "🏆", "🎧",
                 "🏡", "💻", "💡", "🗑", "🍬",
                 "🎁", "💬", "🔕", "🛑", "✂️",
                 "🛒", "💰", "⚖️", "🎾", "📿",
                 "🥒", "☕️", "🔔", "👽", "💼",
                 "💍", "👞", "🔥", "🌏", "🦐",
                 "🐛", "🐌", "🐓", "🐍", "🥚",
                 "🌶", "🍰", "🎪", "⌛️", "⏳",
                 "🔒", "🔓", "🔑", "🖊", "📦",
                 "💊", "🔪", "🚬", "⚰️", "🕳",
                 "👻", "🌈", "🌙", "🎳", "🛶",
                 "🏰", "🛰", "⚓️", "⏰", "🚪",
                 "🔭", "🚽", "🕯", "🔍", "🗞",
                 "♻️", "💯" ];

  function randomizer(range) {
    return Math.floor(Math.random() * range);
  }

  function pick() {
    // type = randomizer(lists.length);
    i = randomizer(emojis.length);
    return emojis[i];
  }

  var array = ["#one", "#two", "#three", "#four"]
  var speed = 400;

  // Execute randomizer functions with delay
  setTimeout(function() {
    $("#one").fadeTo(0,0);
    $("#two").fadeTo(0,0);
    $("#three").fadeTo(0,0);
    $("#four").fadeTo(0,0);
    $("#one").text(pick());
    $("#two").text(pick());
    $("#three").text(pick());
    $("#four").text(pick());
    $(".item").fadeTo(speed,1);
    $(".analogy-item").fadeTo(speed,1);
    setInterval(function() {
      var c1 = array[randomizer(array.length)];
      var c2 = array[randomizer(array.length)];
      var c3 = array[randomizer(array.length)];
      selectors = c1 + ", " + c2 + ", " + c3
      $(selectors).fadeTo(speed,0);
      setTimeout(function() {
      $(c1).text(pick());
      $(c2).text(pick());
      $(c3).text(pick());
      }, speed);
      // $('#analogies-container').css("background-color", "white");
      $(selectors).fadeTo(speed,1);
    }, (speed * 12));
  }, speed);
});
