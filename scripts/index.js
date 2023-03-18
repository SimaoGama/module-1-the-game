console.log('JS loaded');

const canvas = document.getElementById('ironhacker');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = '../images/Sidescroller-background.png';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//gravity
gravity = () => {
  if (this.position.y + this.height + this.speed.y <= canvas.height) {
    this.speed.y += this.gravity;
  } else {
    this.speed.y = 0;
  }
};

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
      platform6.position.x -= 5;
      platform7.position.x -= 5;
      platform8.position.x -= 5;
      floor.position.x -= 5;
      floor2.position.x -= 5;
    } else if (keys.left.pressed) {
      platform.position.x += 5;
      platform2.position.x += 5;
      platform3.position.x += 5;
      platform4.position.x += 5;
      platform5.position.x += 5;
      platform6.position.x += 5;
      platform7.position.x += 5;
      platform8.position.x += 5;
      floor.position.x += 5;
      floor2.position.x += 5;
    }
  }
};

const player = new Player('blue');
const enemy1 = new Enemy({ x: 500, y: 500 }, player);
const enemy2 = new Enemy({ x: 800, y: 500 }, player);
const levelOne = new LevelOne(player);
const game = new Game();

// levelOne.init();
// const image = new Background(backgroundImage);

//game testing
let floor = new Platform({ x: 0, y: canvas.height - 50 });
floor.width = 1000;
floor.height = canvas.height - 500;
let floor2 = new Platform({ x: 1500, y: canvas.height - 50 });
floor2.width = 1500;
floor2.height = canvas.height - 500;

let platform = new Platform({ x: 900, y: 700 });
let platform2 = new Platform({ x: 1200, y: 500 });
let platform3 = new Platform({ x: 1400, y: 300 });
let platform4 = new Platform({ x: 700, y: 500 });
let platform5 = new Platform({ x: 1900, y: 300 });
let platform6 = new Platform({ x: 2100, y: 700 });
let platform7 = new Platform({ x: 2500, y: 500 });
let platform8 = new Platform({ x: 3100, y: 400 });

animateGame = () => {
  game.clear();
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  //image.draw();
  enemy1.init();
  enemy2.init();
  player.update();
  playerMovement();

  floor.activate(player);
  floor2.activate(player);

  floor.activate(enemy1);
  floor.activate(enemy2);
  floor2.activate(enemy1);
  floor2.activate(enemy2);

  platform.activate(player);
  platform2.activate(player);
  platform3.activate(player);
  platform4.activate(player);
  platform5.activate(player);
  platform6.activate(player);
  platform7.activate(player);
  platform8.activate(player);

  requestAnimationFrame(animateGame);
};

backgroundImage.onload = () => {
  animateGame();
};

// event listeners
window.addEventListener('keydown', event => {
  switch (event.key) {
    case 'd':
      player.speed.x += 5;
      keys.right.pressed = true;
      break;
    case 'a':
      player.speed.x -= 5;
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
