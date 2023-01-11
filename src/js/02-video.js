import Player from "@vimeo/player";

let iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

  

    const onPlay = function(data) {
      localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
    return  player.setCurrentTime(parsedSettings.seconds).then(function(seconds) {
      const savedSettings = localStorage.getItem("videoplayer-current-time");
      const parsedSettings = JSON.parse(savedSettings);
      console.log(parsedSettings.seconds);
      })
  };
//   player.setCurrentTime(parsedSettings.seconds).then(function(seconds) {

// })

  player.on('timeupdate', onPlay);