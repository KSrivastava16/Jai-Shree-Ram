const musica = document.querySelector("i#a");
const musicb = document.querySelector("i#b");
const musicc = document.querySelector("i#c");
const musicd = document.querySelector("i#d");
const musice = document.querySelector("i#e");
const musicf = document.querySelector("i#f");
const musicg = document.querySelector("i#g");

let music = new Audio("Side - A.mp3");

musica.addEventListener("click", function() {
  music.pause();
  music = new Audio("Side - A.mp3");
  music.play();
  console.log("hello World");
  const parent = musica.parentElement;
  parent.style.backgroundColor = "#00bd56";
});

musicb.addEventListener("click", function() {
  music.pause();
  music = new Audio("Side - B.mp3 ");
  music.play();
  const parent = musicb.parentElement;
  parent.style.backgroundColor = "#00bd56 ";
});

musicc.addEventListener("click", function() {
  music.pause();
  music = new Audio("Dashrath Ke ghar Janme Ram.mp3");
  music.play();
  musicc.parentElement.style.backgroundColor = "#00bd56";
});

musicd.addEventListener("click", function() {
  music.pause();
  music = new Audio("BAJRANG BAAN.mp3");
  music.play();
  musicd.parentElement.style.backgroundColor = "#00bd56";
});

musice.addEventListener("click", function() {
  music.pause();
  music = new Audio("MANGAL MOORTI NANDAN.mp3");
  music.play();
  musice.parentElement.style.backgroundColor = "#00bd56";
});

musicf.addEventListener("click", function() {
  music.pause();
  music = new Audio("HE BAJRANG BALI HANUMAN.mp3");
  music.play();
  musicf.parentElement.style.backgroundColor = "#00bd56";
});

musicg.addEventListener("click", function() {
  music.pause();
  music = new Audio("Shri Hanuman Chalisa.mp3");
  music.play();
  musicg.parentElement.style.backgroundColor = "#00bd56";
});
