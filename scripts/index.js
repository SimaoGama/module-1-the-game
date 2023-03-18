console.log('JS loaded');

const canvas = document.getElementById('ironhacker');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//set gravity
let gravity = 0.7;

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
  if (keys.right.pressed && player.position.x < canvas.width / 2) {
    player.speed.x = 5;
  } else if (keys.left.pressed && player.position.x > 200) {
    player.speed.x = -5;
  } else {
    player.speed.x = 0;
    // background
    if(keys.right.pressed){
      platform.position.x -= 5
      platform2.position.x -= 5
      platform3.position.x -= 5
      platform4.position.x -= 5
      platform5.position.x -= 5
    } else if (keys.left.pressed){
      platform.position.x += 5
      platform2.position.x += 5
      platform3.position.x += 5
      platform4.position.x += 5
      platform5.position.x += 5
    }
  }
};

collisionDetection = () => {
  if (
    player.position.y + player.speed.y + player.height >= platform.position.y &&
    player.position.y + player.height <= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width
  ) {
    player.speed.y = 0;
  }
};

let player = new Player('blue');
let platform = new Platform({ x: 900, y: 700 });
let platform2 = new Platform({ x: 1200, y: 500 });
let platform3 = new Platform({ x: 1400, y: 300 });
let platform4 = new Platform({ x: 700, y: 500 });
let platform5 = new Platform({ x: 1900, y: 300 });

player.draw();
platform.draw(); // test

animateGame = () => {
  requestAnimationFrame(animateGame);
  player.clear();
  player.update();
  platform.activate(player)
  platform2.activate(player)
  platform3.activate(player)
  platform4.activate(player)
  platform5.activate(player)

  playerMovement();
  
  collisionDetection();
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
      player.speed.y -= 25;
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
