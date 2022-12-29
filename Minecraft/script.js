// Variables
let bg1 = document.getElementById("bg1");
let logo = document.getElementById("logo");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let forwardBtn = document.getElementById("forward");
let bg0 = document.querySelector(".bg0");
let statusDiv = document.querySelector(".status");
let statusBtn = document.querySelector(".statusBtn");
let btn3 = document.getElementById("btn3");

// Music
let themeMusic = new Audio("music/themesong.mp3");
themeMusic.loop = true;

// Warning Alert
setInterval(() => {
    if (window.innerHeight > window.innerWidth) {
        statusDiv.style.display = "block";
        statusBtn.style.display = "none";
    }

    else {
        statusBtn.style.display = "block";
    }

}, 10);

function widthOk() {
    statusDiv.style.display = "none";
    statusBtn.style.display = "none";
}

setTimeout(() => {

    bg1.style.background = "none";
    bg1.style.background = "url(images/mainbg.png)";
    bg1.style.backgroundRepeat = "no-repeat";
    bg1.style.backgroundSize = "cover";
    themeMusic.play();

    logo.style.display = "block";
    btn1.style.display = "inline-block";
    btn2.style.display = "inline-block";
    // btn3.style.display = "inline-block";

}, 1600);