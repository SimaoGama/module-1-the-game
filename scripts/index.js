console.log('JS loaded');

const canvas = document.getElementById('ironhacker');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//set gravity
let gravity = 2.5;

class Player {
  constructor(color) {
    this.position = {
      x: 100,
      y: 100
    };
    this.speed = {
      x: 0,
      y: 1
    };
    this.width = 50;
    this.height = 50;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  update() {
    this.draw();
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //gravity
    if (this.position.y + this.height + this.speed.y <= canvas.height) {
      this.speed.y += gravity;
    } else {
      this.speed.y = 0;
    }
  }
}

//defining state to keys
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

playerMovement = () => {
  if (keys.right.pressed) {
    player.speed.x = 5;
  } else if (keys.left.pressed) {
    player.speed.x = -5;
  } else player.speed.x = 0;
};

collision = () => {
  if (
    player.position.x < platform.position.x + platform.width &&
    player.position.x + player.width > platform.position.x &&
    player.position.y < platform.position.y + platform.height &&
    player.position.y + player.height > platform.position.y
  ) {
    player.position.y = 0;
    player.speed.y = 0;
  }
};

let player = new Player('blue');
let platform = new Platform({ x: 900, y: 700 });
player.draw();
platform.draw(); // test

animateGame = () => {
  requestAnimationFrame(animateGame);
  player.clear();
  player.update();
  platform.draw();

  playerMovement();
  collision();
};

// start game
animateGame();

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
      player.speed.y -= 35;
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
