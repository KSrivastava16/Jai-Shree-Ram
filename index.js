const musica = document.querySelector("i#a");
const musicb = document.querySelector("i#b");
const musicc = document.querySelector("i#c");
const musicd = document.querySelector("i#d");
const musice = document.querySelector("i#e");
const musicf = document.querySelector("i#f");
const musicg = document.querySelector("i#g");

let music = new Audio("Side - A.mp3");

musica.addEventListener("click", playmusic);

musicb.addEventListener("click", playmusic);

musicc.addEventListener("click", playmusic);

musicd.addEventListener("click", playmusic);

musice.addEventListener("click", playmusic);

musicf.addEventListener("click", playmusic);

musicg.addEventListener("click", playmusic);

function playmusic(e) {
  console.log(e);
  switch (e.target.id) {
    case "a":
      music.pause();
      music = new Audio("Side - A.mp3");
      music.play();
      musica.parentElement.style.backgroundColor = "#00bd56";
      break;
    case "b":
      music.pause();
      music = new Audio("Side - B.mp3 ");
      music.play();
      const parent = musicb.parentElement;
      parent.style.backgroundColor = "#00bd56 ";
      break;
    case "c":
      music.pause();
      music = new Audio("Dashrath Ke ghar Janme Ram.mp3");
      music.play();
      musicc.parentElement.style.backgroundColor = "#00bd56";
      break;
    case "d":
      music.pause();
      music = new Audio("BAJRANG BAAN.mp3");
      music.play();
      musicd.parentElement.style.backgroundColor = "#00bd56";
      break;
    case "e":
      music.pause();
      music = new Audio("MANGAL MOORTI NANDAN.mp3");
      music.play();
      musice.parentElement.style.backgroundColor = "#00bd56";
      break;
    case "f":
      music.pause();
      music = new Audio("HE BAJRANG BALI HANUMAN.mp3");
      music.play();
      musicf.parentElement.style.backgroundColor = "#00bd56";
      break;
    case "g":
      music.pause();
      music = new Audio("Shri Hanuman Chalisa.mp3");
      music.play();
      musicg.parentElement.style.backgroundColor = "#00bd56";
      break;
  }
}
