import throttle from 'lodash.throttle';
import Player from "@vimeo/player";


const iframe = document.querySelector("#vimeo-player");

const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const setDataInLocalStorage = function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

const getDataFromLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(getDataFromLocalStorage).then(function(seconds) {

}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          break;
      default:
          break;
  }
});;

player.on('timeupdate', throttle(setDataInLocalStorage, 1000));

