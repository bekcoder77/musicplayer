let title = document.querySelector(".music-title");
let cover = document.querySelector("#image");
let audio = document.querySelector("#audio");
let prewBtn = document.querySelector("#prewBtn");
let play = document.querySelector("#play");
let nextBtn = document.querySelector("#nextBtn");
let leftMusics = document.querySelector(".left-musics");
let menu = document.querySelector(".menu");

let musicLeft = document.getElementsByClassName("music-left");
let progress = document.querySelector(".progress");
let endtime = document.getElementById("endtime");
let currentTime = document.getElementById("curtime");
let range = document.querySelector("#range");
let progressContainer = document.getElementsByClassName("music-time")[0];

let songIndex = 0;
let isLoading = false;

const songs = [
  "Janaga",
  "All eyes 1",
  "Burdana",
  "vapo",
  'Tabibim',
  "barmen",
  "gasolina",
  "volki",
 
];

// variables

menu.addEventListener("click", () => {
  leftMusics.classList.toggle("active");
});

songs.forEach(function (song) {
  leftMusics.innerHTML += `<li>  <i class="fa-solid fa-music">  <span class="music-left">${song}</span> </li>`;
});

Array.from(musicLeft).forEach((item, index) => {
  item.addEventListener("click", () => {
    loadSong(songs[index]);
    isLoading = true;
    audio.play();
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    leftMusics.classList.remove('active')
    cover.classList.add("active");
    // musics.style.display = "none";
  });
});



function loadSong(index) {
  title.textContent = index;
  cover.src = `./img/${index}.jpg`;
  audio.src = `./musics/${index}.mp3`;
}

loadSong(songs[songIndex]);

nextBtn.addEventListener("click", nextMusic);

function nextMusic() {
  if (songIndex < songs.length - 1) {
    songIndex++;
  } else {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  audio.play();
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  cover.classList.add("active");
}

prewBtn.addEventListener("click", prevMusic);

function prevMusic() {
  if (songIndex == 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex--;
  }

  loadSong(songs[songIndex]);
  audio.play();
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  cover.classList.add("active");
}

play.addEventListener("click", playPause);
function playPause() {
  if (!isLoading) {
    audio.play();
    isLoading = true;
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    audio.pause();
    isLoading = false;
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
    cover.classList.add("active");
  }
}

function progres(e) {
  let duration = e.srcElement.duration;
  let curTime = e.srcElement.currentTime;
  const percent = (curTime / duration) * 100;
  progress.style.width = `${percent}%`;
  if (parseInt(duration / 60) == NaN && parseInt(duration % 60) == NaN) {
    endtime.textContent = "00 : 00";
  } else if (parseInt(duration / 60) < 10 && parseInt(duration % 60) < 10) {
    endtime.textContent = `${"0" + parseInt(duration / 60)} : ${
      "0" + parseInt(duration % 60)
    }`;
  } else if (parseInt(duration / 60) < 10) {
    endtime.textContent = `${"0" + parseInt(duration / 60)} : ${parseInt(
      duration % 60
    )}`;
  } else if (parseInt(duration % 60) < 10) {
    endtime.textContent = `${parseInt(duration / 60)} : ${
      "0" + parseInt(duration % 60)
    }`;
  } else {
    endtime.textContent = `${parseInt(duration / 60)} : ${parseInt(
      duration % 60
    )}`;
  }
  if (parseInt(curTime / 60) == NaN && parseInt(curTime % 60) === NaN) {
    currentTime.textContent = "00 : 00";
  } else if (parseInt(curTime / 60) < 10 && parseInt(curTime % 60) < 10) {
    currentTime.textContent = `${"0" + parseInt(curTime / 60)} : ${
      "0" + parseInt(curTime % 60)
    }`;
  } else if (parseInt(curTime / 60) < 10) {
    currentTime.textContent = `${"0" + parseInt(curTime / 60)} : ${parseInt(
      curTime % 60
    )}`;
  } else if (parseInt(curTime % 60) < 10) {
    currentTime.textContent = `${parseInt(curTime / 60)} : ${
      "0" + parseInt(curTime % 60)
    }`;
  } else {
    currentTime.textContent = `${parseInt(curTime / 60)} : ${parseInt(
      curTime % 60
    )}`;
  }
  // currentTime.textContent = curTimex
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickPoint = e.offsetX;
  let durationEl = audio.duration;
  audio.currentTime = (clickPoint * durationEl) / width;
}

progressContainer.addEventListener("click", setProgress);
function changeVolume() {
  audio.volume = range.value / range.max;
}
audio.addEventListener("timeupdate", progres);
audio.addEventListener("ended", nextMusic);
range.addEventListener("input", changeVolume);
