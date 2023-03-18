console.log('JS loaded');

const canvas = document.getElementById('ironhacker');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = '../images/Sidescroller-background.png';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const playerMovement = () => {
  if (keys.right.pressed && player.position.x < canvas.width / 2) {
    player.speed.x = 5;
  } else if (keys.left.pressed && player.position.x > 200) {
    player.speed.x = -5;
  } else {
    player.speed.x = 0;
    // background
    if (keys.right.pressed) {
      platform.position.x -= 5;
      platform2.position.x -= 5;
      platform3.position.x -= 5;
      platform4.position.x -= 5;
      platform5.position.x -= 5;
    } else if (keys.left.pressed) {
      platform.position.x += 5;
      platform2.position.x += 5;
      platform3.position.x += 5;
      platform4.position.x += 5;
      platform5.position.x += 5;
    }
  }
};

const player = new Player('red');
const game = new Game();
// const levelOne = new LevelOne(player);
// levelOne.init();
// const image = new Background(backgroundImage);

let platform = new Platform({ x: 900, y: 700 });
let platform2 = new Platform({ x: 1200, y: 500 });
let platform3 = new Platform({ x: 1400, y: 300 });
let platform4 = new Platform({ x: 700, y: 500 });
let platform5 = new Platform({ x: 1900, y: 300 });

animateGame = () => {
  game.clear();
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  //image.draw();
  player.update();
  playerMovement();
  platform.activate(player);
  platform2.activate(player);
  platform3.activate(player);
  platform4.activate(player);
  platform5.activate(player);
  requestAnimationFrame(animateGame);
};

backgroundImage.onload = () => {
  animateGame();
};

//start game
// animateGame();

// levelOne = new LevelOne(player);
// levelOne.animateGame();

// event listeners
window.addEventListener('keydown', event => {
  switch (event.key) {
    case 'd':
      player.speed.x += 1;
      keys.right.pressed = true;
      break;
    case 'a':
      player.speed.x -= 1;
      keys.left.pressed = true;
      break;
    case ' ':
      player.speed.y -= 20;
      break;
  }
});

window.addEventListener('keyup', event => {
  switch (event.key) {
    case 'd':
      player.speed.x = 0;
      keys.right.pressed = false;
      break;
    case 'a':
      player.speed.x = 0;
      keys.left.pressed = false;
      break;
  }
});

backgroundImage.addEventListener('load', () => {
  background = new Background(backgroundImage);
});
