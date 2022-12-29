// Variables And Constants
const StartBtn = document.getElementById("startBtn");
const startArea = document.querySelector(".start");
const cactus = document.querySelector(".cactus");
const steve = document.querySelector(".steve");
const gameOver = document.querySelector(".gameOver");
const restartBtn = document.getElementById("restart");

const scoreBox = document.querySelector(".score");
const loding2 = document.getElementById("loding2");
const menu = document.querySelector(".menu");
const menuImg = document.getElementById("menuImg");
const menuToggle = document.getElementById("back");
const steve2 = document.querySelector(".steve2");

const sun = document.querySelector(".sun");
const cloud1 = document.querySelector(".cloud");
const cloud2 = document.querySelector(".cloud2");
const ground1 = document.querySelector(".ground");
const ground2 = document.querySelector(".ground2");
const diamond = document.querySelector(".diamond");

const diamondCollect = document.querySelector(".diamondCollect");
const diamondCount = document.querySelector(".cb1");
const inventoryMain = document.querySelector(".inventoryMain");
const inventoryHolder = document.querySelector(".inventoryHolder");
const inventory2 = document.querySelector(".inventory2");
const inventory3 = document.querySelector(".inventory3");

const inventory4 = document.querySelector(".inventory4");
const inventory5 = document.querySelector(".inventory5");
const inventory6 = document.querySelector(".inventory6");
const mobileInventory = document.querySelector(".mobileInventory");
const diamondCount2 = document.querySelector(".cb1s");

let statusDiv = document.querySelector(".status");
let statusBtn = document.querySelector(".statusBtn");
let aniCactus = document.querySelector(".animationCactus");
let mainBtn = document.getElementById("btn1");
let cross = true;
let cross2 = true;

let score = 0;
let diaCount = 0;

// Music
let gameMusic = new Audio("../music/themesong.mp3");
gameMusic.loop = true;

// Media Query Variables
let mq1 = window.matchMedia("(max-width: 860px)");
let mq2 = window.matchMedia("(max-width: 681px)");
let mq3 = window.matchMedia("(max-width: 625px)");
let mq4 = window.matchMedia("(max-height: 565px)");

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

// Game Logic

setTimeout(() => {
    loding2.style.backgroundImage = "url(../images/background.png)";
    steve.style.display = "block";
    cactus.style.display = "block";
    startArea.style.display = "block";
    menuImg.style.display = "block";
    sun.style.display = "block";
    cloud1.style.display = "block";
    cloud2.style.display = "block";
    ground1.style.display = "block";
    ground2.style.display = "block";

    if (window.innerWidth >= 682) {
        inventoryHolder.style.display = "block";
        inventoryMain.style.display = "block";
        inventory2.style.display = "block";
        inventory3.style.display = "block";
        inventory4.style.display = "block";
        inventory5.style.display = "block";
        inventory6.style.display = "block";
    }

    else {
        inventoryHolder.style.display = "none";
        inventoryMain.style.display = "none";
        inventory2.style.display = "none";
        inventory3.style.display = "none";
        inventory4.style.display = "none";
        inventory5.style.display = "none";
        inventory6.style.display = "none";
    }

    if (window.innerHeight <= 502) {
        inventoryHolder.style.display = "none";
        inventoryMain.style.display = "none";
        inventory2.style.display = "none";
        inventory3.style.display = "none";
        inventory4.style.display = "none";
        inventory5.style.display = "none";
        inventory6.style.display = "none";
    }

    gameMusic.play();
}, 1200);

function startBtn() {

    sun.classList.add("animationSun");
    cloud1.classList.add("animationCloud1");
    cloud2.classList.add("animationCloud2");
    ground1.classList.add("animationGround1");
    ground2.classList.add("animationGround2");
    diamond.classList.add("animationDiamond");
    steve2.style.display = "block";
    steve.style.display = "none";
    scoreBox.style.display = "block";
    startArea.style.display = "none";
    menuToggle.style.display = "block";
    cactus.classList.add("animationCactus");
    window.addEventListener('keydown', function (e) {
        // console.log("You pressed " + e.key);
        if (e.key == ' ') {
            steve2.classList.add("animationSteve2");
            steve2.style.backgroundImage = "url(../images/steveside.png)";
        }
        setTimeout(() => {
            steve2.classList.remove("animationSteve2");
            steve2.style.backgroundImage = "url(../images/stevewalking.png)";
        }, 720);

    });

    setInterval(() => {

        if (window.innerWidth > 860) {

            px = parseInt(window.getComputedStyle(steve2, null).getPropertyValue("left"));
            py = parseInt(window.getComputedStyle(steve2, null).getPropertyValue("bottom"));

            cx = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("left"));
            cy = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("bottom"));

            offsetX = Math.abs(px - cx);
            offsetY = Math.abs(py - cy);
            // console.log(offsetX, offsetY);

            if (offsetX < 105 && offsetY < 52) {
                gameOver.style.display = "block";
                steve2.style.display = "none";
                steve.style.display = "block";
                cactus.classList.remove("animationCactus");
                steve2.classList.remove("animationSteve2");
                sun.classList.remove("animationSun");
                cloud1.classList.remove("animationCloud1");

                cloud2.classList.remove("animationCloud2");
                ground1.classList.remove("animationGround1");
                ground2.classList.remove("animationGround2");
                diamond.classList.remove("animationDiamond");
            }

            else if (offsetX < 100 && cross) {
                score += 1;
                updateScore(score);
                cross = false;

                setTimeout(() => {
                    cross = true;
                }, 800);

                setTimeout(() => {
                    let aniDur = parseFloat(window.getComputedStyle(cactus, null).getPropertyValue("animation-duration"));
                    let newDur = aniDur - 0.01;
                    cactus.style.animationDuration = newDur + "s";
                    // console.log(newDur);

                }, 500);
            }
        }

        dx = parseInt(window.getComputedStyle(diamond, null).getPropertyValue("left"));
        dy = parseInt(window.getComputedStyle(diamond, null).getPropertyValue("bottom"));

        stevex = parseInt(window.getComputedStyle(steve, null).getPropertyValue("left"));
        stevey = parseInt(window.getComputedStyle(steve, null).getPropertyValue("bottom"));

        offsetDX = Math.abs(dx - stevex);
        offsetDY = Math.abs(dy - stevey);
        // console.log(offsetDX, offsetDY);

        if (offsetDX < 102 && cross2) {
            score += 5;
            diaCount += 1;
            updateScore(score);
            cross2 = false;
            diamond.style.visibility = "hidden";
            diamondCollect.style.display = "block";
            diamondCount.innerHTML = diaCount;
            diamondCount2.innerHTML = diaCount;

            setTimeout(() => {
                cross2 = true;
            }, 800);

            setTimeout(() => {
                diamond.style.visibility = "visible";
            }, 1000);

            setTimeout(() => {
                diamondCollect.style.display = "none";
            }, 2500);
        }

    }, 10);

}

function restart() {
    gameOver.style.display = "none";
    steve2.style.display = "block";
    steve.style.display = "none";
    steve2.classList.add("animationSteve2");
    cactus.classList.add("animationCactus");
    sun.classList.add("animationSun");
    cloud1.classList.add("animationCloud1");
    cloud2.classList.add("animationCloud2");
    ground1.classList.add("animationGround1");
    ground2.classList.add("animationGround2");
    diamond.classList.add("animationDiamond");
}

function Jump() {
    steve2.classList.add("animationSteve2");
    steve2.style.backgroundImage = "url(../images/steveside.png)";

    setTimeout(() => {
        steve2.classList.remove("animationSteve2");
        steve2.style.backgroundImage = "url(../images/stevewalking.png)";
    }, 720);
}

function updateScore(score) {
    scoreBox.innerHTML = "Total Score: " + score;
}

function backBtn() {

    cactus.classList.remove("animationCactus");
    steve2.classList.remove("animationSteve2");
    sun.classList.remove("animationSun");
    cloud1.classList.remove("animationCloud1");
    cloud2.classList.remove("animationCloud2");
    ground1.classList.remove("animationGround1");
    ground2.classList.remove("animationGround2");
    diamond.classList.remove("animationDiamond");
    if (menu.style.display != "flex") {
        menu.style.display = "flex";
        steve2.style.display = "none";
        steve.style.display = "block";
        menuImg.src = "../images/close.png";
    }

    else {
        menu.style.display = "none";
        steve2.style.display = "block";
        steve.style.display = "none";
        menuImg.src = "../images/menu.png";
        cactus.classList.add("animationCactus");
        sun.classList.add("animationSun");
        cloud1.classList.add("animationCloud1");
        cloud2.classList.add("animationCloud2");
        ground1.classList.add("animationGround1");
        ground2.classList.add("animationGround2");
        diamond.classList.add("animationDiamond");
    }
}

function backInventory() {
    mobileInventory.style.display = "none";
    menu.style.display = "flex";
}

function viewInventory() {
    mobileInventory.style.display = "block";
    menu.style.display = "none";
}

function mediaQ1(mq1) {
    if (window.innerWidth <= 860 && window.innerWidth > 681) {
        setInterval(() => {
            px2 = parseInt(window.getComputedStyle(steve2, null).getPropertyValue("left"));
            py2 = parseInt(window.getComputedStyle(steve2, null).getPropertyValue("bottom"));

            cx2 = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("left"));
            cy2 = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("bottom"));

            offsetX2 = Math.abs(px2 - cx2);
            offsetY2 = Math.abs(py2 - cy2);
            // console.log(offsetX2, offsetY2);

            if (offsetX2 < 83 && offsetY2 < 31) {
                gameOver.style.display = "block";
                steve2.style.display = "none";
                steve.style.display = "block";
                cactus.classList.remove("animationCactus");
                steve2.classList.remove("animationSteve2");
                diamond.classList.remove("animationDiamond");
                sun.classList.remove("animationSun");
                cloud1.classList.remove("animationCloud1");
                cloud2.classList.remove("animationCloud2");
                ground1.classList.remove("animationGround1");
                ground2.classList.remove("animationGround2");
            }

            else if (offsetX2 < 81 && cross) {
                score += 1;
                updateScore(score);
                cross = false;

                setTimeout(() => {
                    cross = true;
                }, 800);

                setTimeout(() => {
                    let aniDur = parseFloat(window.getComputedStyle(cactus, null).getPropertyValue("animation-duration"));
                    let newDur = aniDur - 0.01;
                    cactus.style.animationDuration = newDur + "s";
                    console.log(newDur);

                }, 500);
            }

            dx = parseInt(window.getComputedStyle(diamond, null).getPropertyValue("left"));
            dy = parseInt(window.getComputedStyle(diamond, null).getPropertyValue("bottom"));

            stevex = parseInt(window.getComputedStyle(steve, null).getPropertyValue("left"));
            stevey = parseInt(window.getComputedStyle(steve, null).getPropertyValue("bottom"));

            offsetDX = Math.abs(dx - stevex);
            offsetDY = Math.abs(dy - stevey);
            // console.log(offsetDX, offsetDY);

            if (offsetDX < 102 && cross2) {
                score += 5;
                updateScore(score);
                cross2 = false;
                diamond.style.visibility = "hidden";

                setTimeout(() => {
                    cross2 = true;
                }, 800);

                setTimeout(() => {
                    diamond.style.visibility = "visible";
                }, 1000);

                setTimeout(() => {
                    diamondCollect.style.display = "none";
                }, 2500);
            }

        }, 10);
    }
}
mediaQ1(mq1);

function mediaQ2(mq2) {
    if (window.innerWidth <= 681 && window.innerWidth > 625) {
        setInterval(() => {
            px3 = parseInt(window.getComputedStyle(steve2, null).getPropertyValue("left"));
            py3 = parseInt(window.getComputedStyle(steve2, null).getPropertyValue("bottom"));

            cx3 = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("left"));
            cy3 = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("bottom"));

            offsetX3 = Math.abs(px3 - cx3);
            offsetY3 = Math.abs(py3 - cy3);
            // console.log(offsetX3, offsetY3);

            if (offsetX3 < 78 && offsetY3 < 26) {
                gameOver.style.display = "block";
                steve2.style.display = "none";
                steve.style.display = "block";
                cactus.classList.remove("animationCactus");
                steve2.classList.remove("animationSteve2");
                sun.classList.remove("animationSun");

                diamond.classList.remove("animationDiamond");
                cloud1.classList.remove("animationCloud1");
                cloud2.classList.remove("animationCloud2");
                ground1.classList.remove("animationGround1");
                ground2.classList.remove("animationGround2");
            }

            else if (offsetX3 < 75 && cross) {
                score += 1;
                updateScore(score);
                cross = false;

                setTimeout(() => {
                    cross = true;
                }, 800);

                setTimeout(() => {
                    let aniDur = parseFloat(window.getComputedStyle(cactus, null).getPropertyValue("animation-duration"));
                    let newDur = aniDur - 0.01;
                    cactus.style.animationDuration = newDur + "s";
                    console.log(newDur);

                }, 500);
            }

            dx = parseInt(window.getComputedStyle(diamond, null).getPropertyValue("left"));
            dy = parseInt(window.getComputedStyle(diamond, null).getPropertyValue("bottom"));

            stevex = parseInt(window.getComputedStyle(steve, null).getPropertyValue("left"));
            stevey = parseInt(window.getComputedStyle(steve, null).getPropertyValue("bottom"));

            offsetDX = Math.abs(dx - stevex);
            offsetDY = Math.abs(dy - stevey);
            // console.log(offsetDX, offsetDY);

            if (offsetDX < 102 && cross2) {
                score += 5;
                updateScore(score);
                cross2 = false;
                diamond.style.visibility = "hidden";

                setTimeout(() => {
                    cross2 = true;
                }, 800);

                setTimeout(() => {
                    diamond.style.visibility = "visible";
                }, 1000);

                setTimeout(() => {
                    diamondCollect.style.display = "none";
                }, 2500);
            }

        }, 10);
    }
}
mediaQ2(mq2);

function mediaQ3(mq3) {
    if (window.innerWidth <= 625) {
        setInterval(() => {
            px4 = parseInt(window.getComputedStyle(steve2, null).getPropertyValue("left"));
            py4 = parseInt(window.getComputedStyle(steve2, null).getPropertyValue("bottom"));

            cx4 = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("left"));
            cy4 = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("bottom"));

            offsetX4 = Math.abs(px4 - cx4);
            offsetY4 = Math.abs(py4 - cy4);
            // console.log(offsetX4, offsetY4);

            if (offsetX4 < 68 && offsetY4 < 16) {
                gameOver.style.display = "block";
                steve2.style.display = "none";
                steve.style.display = "block";
                cactus.classList.remove("animationCactus");
                steve2.classList.remove("animationSteve2");
                sun.classList.remove("animationSun");
                diamond.classList.remove("animationDiamond");
                cloud1.classList.remove("animationCloud1");
                cloud2.classList.remove("animationCloud2");
                ground1.classList.remove("animationGround1");
                ground2.classList.remove("animationGround2");
            }

            else if (offsetX4 < 65 && cross) {
                score += 1;
                updateScore(score);
                cross = false;

                setTimeout(() => {
                    cross = true;
                }, 800);

                setTimeout(() => {
                    let aniDur = parseFloat(window.getComputedStyle(cactus, null).getPropertyValue("animation-duration"));
                    let newDur = aniDur - 0.01;
                    cactus.style.animationDuration = newDur + "s";
                    console.log(newDur);

                }, 500);
            }

            dx = parseInt(window.getComputedStyle(diamond, null).getPropertyValue("left"));
            dy = parseInt(window.getComputedStyle(diamond, null).getPropertyValue("bottom"));

            stevex = parseInt(window.getComputedStyle(steve, null).getPropertyValue("left"));
            stevey = parseInt(window.getComputedStyle(steve, null).getPropertyValue("bottom"));

            offsetDX = Math.abs(dx - stevex);
            offsetDY = Math.abs(dy - stevey);
            // console.log(offsetDX, offsetDY);

            if (offsetDX < 102 && cross2) {
                score += 5;
                updateScore(score);
                cross2 = false;
                diamond.style.visibility = "hidden";

                setTimeout(() => {
                    cross2 = true;
                }, 800);

                setTimeout(() => {
                    diamond.style.visibility = "visible";
                }, 1000);

                setTimeout(() => {
                    diamondCollect.style.display = "none";
                }, 2500);
            }

        }, 10);
    }
}
mediaQ3(mq3);