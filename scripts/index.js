console.log("JS loaded");

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

const backgroundImage = createImage("images/backgrounds/nordic.jpg");
const backgroundImageLvl2 = createImage("images/backgrounds/BG.png");
const backgroundImageLvl3 = createImage("images/backgrounds/Moon.png");

const paralaxBackground = createImage("../images/hills.png");
const platformImage = createImage("./images/platform.png");
// const gameObject1 = createImage('./images/gameobject1.png');
const javaScriptBackground = createImage("images/enemies/js-enemy.png");
const htmlBackground = createImage("images/enemies/html-enemy.png");
const cssBackground = createImage("images/enemies/css-enemy.png");

//const mossImage = createImage("images/download.png");

// toggleScreen = (id, toggle) => {
//   let elementId = document.getElementById(id);
//   let canvasDisplay = toggle ? "block" : "none";
//   elementId.style.display = canvasDisplay;
// };

displayStatusText = () => {
  "use strict";
  ctx.fillStyle = "black";
  ctx.font = "20px Helvetica";
  if (game.frames < 0) {
    ctx.fillText(`Frames: 0`, 20, 40);
  } else ctx.fillText(`Frames: ${game.frames}`, 20, 40);

  ctx.fillText(`Level: ${levelOne.name}`, 20, 90);
  ctx.fillText(`Points: ${game.points}`, 20, 140);
  ctx.fillText(`Time: ${(game.timer * 0.01).toFixed(1)}`, 20, 190);
  ctx.fillText(`Quit Game: Q`, 20, 240);

  //ctx.fillText(`Timer: ${convertSeconds(game.timer)}`, 20, 190);
};

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
  } else {
    player.speed.x = 0;

    // if (player.position.y < canvas.height) {
    //   player.position.y = 0;
    // }

    // background

    if (keys.right.pressed) {
      game.frames += 5;
      // player.increaseIndex();
      console.log(game.frames);

      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
      obstacles.forEach((obstacle) => {
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
  animateLevelOne();
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
  startMenu.style.display = "block";
  navBar.style.display = "flex";
  canvas.style.display = "none";
}

window.addEventListener("keydown", (event) => {
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
      player.speed.y -= 25;
      break;
    case "q":
      mainScreen();
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
  startGame();
});

startLevelTwo.addEventListener("click", () => {
  startMenu.style.display = "none";
  navBar.style.display = "none";
  canvas.style.display = "block";
  animateLevelTwo();
});

startLevelThree.addEventListener("click", () => {
  startMenu.style.display = "none";
  navBar.style.display = "none";
  canvas.style.display = "block";
  startGame();
});

backgroundImage.addEventListener("load", () => {
  background = new Background(backgroundImage);
});
