const video = document.getElementById("video");

const play = document.getElementById("play");

const stop = document.getElementById("stop");

const progress = document.getElementById("progress");

const timestamp = document.getElementById("timestamp");

//Funstions

//Play and Pause
function toggleStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlay() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

function updateProgress() {
  return true;
}

function setProgress() {
  return true;
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
//Event Listener
video.addEventListener("click", toggleStatus);

video.addEventListener("pause", updatePlay);

video.addEventListener("play", updatePlay);

video.addEventListener("timeUpdate", updateProgress);

play.addEventListener("click", toggleStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setProgress);
