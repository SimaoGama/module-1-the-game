console.log("JS loaded");

let intervalId;

// game area

// DOM + Images
const canvas = document.getElementById("ironhacker");
const ctx = canvas.getContext("2d");
const startMenu = document.getElementById("start-screen");
const navBar = document.querySelector("nav");
const startLevelOne = document.getElementById("level-one");
const startLevelTwo = document.getElementById("level-two");
const startLevelThree = document.getElementById("level-three");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const backgroundImage = createImage("images/backgrounds/nordic-min.jpg");
const backgroundImageLvl2 = createImage("images/backgrounds/BG.png");
const backgroundImageLvl3 = createImage("images/backgrounds/Moon.png");

const paralaxBackground = createImage("../images/hills.png");

// const gameObject1 = createImage('./images/gameobject1.png');
const javaScriptBackground = createImage("images/enemies/js-enemy.png");
const htmlBackground = createImage("images/enemies/html-enemy.png");
const cssBackground = createImage("images/enemies/css-enemy.png");
const cLogo = createImage("images/enemies/C-logo.png");
const cSharpLogo = createImage("images/enemies/C-Sharp-logo.png");
const reactLogo = createImage("images/enemies/react.png");
const nodeLogo = createImage("images/enemies/node.png");

const platformImage = createImage("./images/platform.png");

//const mossImage = createImage("images/download.png");

// toggleScreen = (id, toggle) => {
//   let elementId = document.getElementById(id);
//   let canvasDisplay = toggle ? "block" : "none";
//   elementId.style.display = canvasDisplay;
// };

let levelOneActive = false;
let levelTwoActive = false;

// let attemptsLeft = 3;

displayStatusText = () => {
  "use strict";

  ctx.fillStyle = "white";
  ctx.font = "18px Inter";

  levelOneActive
    ? ctx.fillText(`Level: 1`, 20, 40)
    : ctx.fillText(`Level: 2`, 20, 40);

  ctx.fillText(`Time: ${(game.timer * 0.01).toFixed(1)}`, 20, 120);
  // ctx.fillText(`ATTEMPTS: ${player.lives}`, 20, 160);

  levelOneActive
    ? ctx.fillText(`Best Time: ${record.bestTime}`, 20, 80)
    : ctx.fillText(`Best Time: ${recordLvl2.bestTime}`, 20, 80);

  // if (game.frames < 0) {
  //   ctx.fillText(`Frames: 0`, 20, 40);
  // } else ctx.fillText(`Frames: ${game.frames}`, 20, 40);

  // ctx.fillText(`Points: ${game.points}`, 20, 140);
  // ctx.globalAlpha = 0.2;

  ctx.fillText(`Move Forward: D`, canvas.width - 200, 40);
  ctx.fillText(`Move Backward: A`, canvas.width - 200, 80);
  ctx.fillText(`Quit Game: Q`, canvas.width - 200, 120);

  //ctx.fillText(`Timer: ${convertSeconds(game.timer)}`, 20, 190);
};
const levelOneAudio = new Audio("audio/Audio-lvl-1.ogg");
const levelTwoAudio = new Audio("audio/Audio-lvl-2.ogg");

function playMusic() {
  levelOneActive ? levelOneAudio.play() : levelTwoAudio.play();
}
function stopMusic() {
  if (levelOneActive) {
    levelOneAudio.pause();
    levelOneAudio.currentTime = 0;
  } else {
    levelTwoAudio.pause();
    levelTwoAudio.currentTime = 0;
  }
}

function stopGame() {
  clearInterval(intervalId);
  // if (levelOneActive) {
  //   animateLevelTwo();
  //   initLevelTwo();
  //   levelOneActive = false;
  //   levelTwoActive = true;
  // } else {
  //   animateLevelOne();
  //   initLevelOne();
  //   levelOneActive = true;
  //   levelTwoActive = false;
  // }
}

//gravity
gravity = () => {
  if (this.position.y + this.height + this.speed.y <= canvas.height) {
    this.speed.y += this.gravity;
  } else {
    this.speed.y = 0;
  }
};

//image creation
function createImage(source) {
  const image = new Image();
  image.src = source;
  return image;
}

//game assets
let player = new Player("blue");
let levelOne = new LevelOne(player);
// let levelTwo = new levelTwo(player);
// let levelThree = new levelThree(player);
let game = new Game(player, levelOne);
let frames = game.frames;

//game testing
let floor = new Platform({ x: 0, y: canvas.height - 80, image: platformImage });

let hills = new GenericBackground({ x: 0, y: 500, image: paralaxBackground });

const playerMovement = () => {
  if (keys.right.pressed && player.position.x < canvas.width / 2) {
    player.speed.x = 5;
  } else if (keys.left.pressed && player.position.x > 400) {
    player.speed.x = -5;
  } else if (player.position.y + player.height <= 0) {
    player.position.y = 0 - player.height + 40;
    player.speed.y = player.gravity;
  } else {
    player.speed.x = 0;

    // background

    if (keys.right.pressed) {
      game.frames += 5;
      // player.increaseIndex();

      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
      obstacles.forEach((obstacle) => {
        obstacle.position.x -= 5;
      });
      platformsLvl2.forEach((platform) => {
        platform.position.x -= 5;
      });
      obstaclesLvl2.forEach((obstacle) => {
        obstacle.position.x -= 5;
      });

      hills.position.x -= 2;
      floor.position.x -= 5;
      //floor2.position.x -= 5;
    } else if (keys.left.pressed) {
      // player.decreaseIndex();
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });
      obstacles.forEach((obstacle) => {
        obstacle.position.x += 5;
      });
      platformsLvl2.forEach((platform) => {
        platform.position.x += 5;
      });
      obstaclesLvl2.forEach((obstacle) => {
        obstacle.position.x += 5;
      });
      // gameObjects.forEach(platform => {
      //   platform.position.x += 4;
      // });
      game.frames -= 5;
      hills.position.x += 2;
      floor.position.x += 5;
      //floor2.position.x += 5;
    }
  }
};

//run game
function startGame() {
  if (levelOneActive) {
    intervalId = setInterval(() => {
      animateLevelOne();
    }, 15);
  } else {
    intervalId = setInterval(() => {
      animateLevelTwo();
    }, 13);
  }
  return intervalId;
}

// function animateLevelOne() {
//   game.clear();
//   ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
//   hills.draw();

//   game.init(player, obstacles);

//   obstacles.forEach((obstacle) => {
//     obstacle.draw();
//   });

//   platforms.forEach((platform) => {
//     platform.activate(player);
//   });

//   //player.update();
//   playerMovement();
//   //game.collision(player, components);
//   floor.activate(player);

//   game.timer += 1;
//   requestAnimationFrame(animateLevelOne);
//   displayStatusText();
// }
// event listeners

function mainScreen() {
  stopMusic();
  startMenu.style.display = "block";
  navBar.style.display = "flex";
  canvas.style.display = "none";
  clearInterval(intervalId);
}

window.addEventListener("keydown", (event) => {
  event.preventDefault();
  switch (event.key) {
    case "d":
      player.speed.x += 5;
      keys.right.pressed = true;
      player.currentSprite = player.sprites.walking.right;
      break;
    case "a":
      player.speed.x -= 5;
      keys.left.pressed = true;
      player.currentSprite = player.sprites.walking.left;
      break;
    case " ":
      player.speed.y -= 20;
      break;
    case "r":
      levelOneActive ? initLevelOne() : initLevelTwo();
      break;
    case "q":
      mainScreen();
      stopMusic();
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      player.speed.x = 0;
      keys.right.pressed = false;
      player.currentSprite = player.sprites.standing.right;
      break;
    case "a":
      player.speed.x = 0;
      keys.left.pressed = false;
      player.currentSprite = player.sprites.standing.left;
      break;
  }
});

startLevelOne.addEventListener("click", () => {
  startMenu.style.display = "none";
  navBar.style.display = "none";
  canvas.style.display = "block";
  levelOneActive = true;
  levelTwoActive = false;
  startGame();
  initLevelOne();
});

startLevelTwo.addEventListener("click", () => {
  startMenu.style.display = "none";
  navBar.style.display = "none";
  canvas.style.display = "block";
  levelOneActive = false;
  levelTwoActive = true;
  startGame();
  initLevelTwo();
});

startLevelThree.addEventListener("click", () => {
  startMenu.style.display = "none";
  navBar.style.display = "none";
  canvas.style.display = "block";
  alert("Please buy the DLC. Coming soon™");
  alert("PREORDER NOW! :D");
  mainScreen();
});

backgroundImage.addEventListener("load", () => {
  background = new Background(backgroundImage);
});
