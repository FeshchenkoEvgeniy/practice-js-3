import Player from "@vimeo/player";

let iframe = document.querySelector("#vimeo-player");
console.log(iframe)
    var player = new Player(iframe);

    player.on('play', function() {
      console.log('Played the video');
    });
