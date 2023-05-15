let title = document.querySelector(".music-title");
let cover = document.querySelector("#image");
let audio = document.querySelector("#audio");
let prewBtn = document.querySelector("#prewBtn");
let play = document.querySelector("#play");
let nextBtn = document.querySelector("#nextBtn");
let leftMusics = document.querySelector(".left-musics");
let menu = document.querySelector(".menu");


let songIndex = 0;
let isLoading = false;


const songs = [
  "Janaga",
  "All eyes 1",
  "Парсе Бурдана",
  "Не_пускайте_меня",
  "vapo",
  "barmen",
  "gasolina",
  "volki",
  "Rauf Faik - метро",
];

function loadSong(index) {
  title.textContent = index;
  cover.src = `./img/${index}.jpg`;
  audio.src = `./musics/${index}.mp3`;
}

loadSong(songs[songIndex]);

nextBtn.addEventListener("click", nextMusic)

function nextMusic() {
    if(songIndex < songs.length -1){
        songIndex++;
    }else{
        songIndex=0
    }
    loadSong(songs[songIndex])
    audio.play();
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

prewBtn.addEventListener('click',prevMusic);

function prevMusic (){
    if(songIndex == 0) {
        songIndex = songs.length - 1;
    }else{
        songIndex--;
    }
    loadSong(songs[songIndex])
    audio.play();
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;

    
}

play.addEventListener("click", playPause );
  function playPause(){
    if(!isLoading){
        audio.play();
        isLoading = true;
        play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }else{
        audio.pause();
        isLoading = false;
        play.innerHTML = `<i class="fa-solid fa-play"></i>`;
      }
  
}


play.addEventListener("click", playPause);
// document.addEventListener("keydown", (e) => {
//   e.preventDefault();
//   if (e.keyCode == 32) {
//     playPause();
//   } else if (e.keyCode == 39) {
//     nextMusic();
//   } else if (e.keyCode == 37) {
//     prewMusic();
//   } else if (e.keyCode == 40) {
//     range.value -= 1;
//     changeVolume();
//   } else if (e.keyCode == 38) {
//     range.value += 1;
//     changeVolume();
//   }
// });

