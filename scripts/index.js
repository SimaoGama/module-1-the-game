console.log('JS loaded');

// DOM + Images
const canvas = document.getElementById('ironhacker');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
// backgroundImage.src = '../images/backgrounds/Sidescroller-background.png';
backgroundImage.src = '../images/backgrounds/BG.png';

const paralaxBackground = new Image();
paralaxBackground.src = '../images/hills.png';

const platformImage = new Image();
platformImage.src = './images/platform.png';

const gameObject1 = new Image();
gameObject1.src = './images/gameobject1.png';

const img = new Image();
img.src = `images/player/Run (${0}).png`;

// const playerSprite = new Image();

// game area
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

//assets creation

createImage = source => {
  const image = new Image();
  image.src = source;
  return image;
};

let frames = 0;
let player = new Player('blue');
let enemy1 = new Enemy({ x: 500, y: 500 }, player);
let enemy2 = new Enemy({ x: 800, y: 500 }, player);
let levelOne = new LevelOne(player);
let game = new Game();

// levelOne.init();
// const image = new Background(backgroundImage);

//lvl 1 platforms

//game testing
let floor = new Platform({ x: 0, y: canvas.height - 80, image: platformImage });
// floor.width = 10000;
// floor.height = canvas.height - 500;

// let floor2 = new Platform({ x: 1500, y: canvas.height - 80, image: platformImage });
// floor2.width = 1500;
// floor2.height = canvas.height - 500;

let hills = new GenericBackground({ x: 0, y: 300, image: paralaxBackground });

//lvl 1 platforms
let platforms = [
  new Platform({ x: 900, y: 700, image: platformImage }),
  new Platform({ x: 1200, y: 500, image: platformImage }),
  new Platform({ x: 1400, y: 300, image: platformImage }),
  new Platform({ x: 700, y: 500, image: platformImage }),
  new Platform({ x: 1900, y: 300, image: platformImage }),
  new Platform({ x: 2100, y: 700, image: platformImage }),
  new Platform({ x: 2500, y: 500, image: platformImage }),
  new Platform({ x: 3100, y: 400, image: platformImage })
];

let gameObjects = [
  new GenericBackground({
    x: 0,
    y: canvas.height - gameObject1.height + 60,
    image: gameObject1
  }),
  new GenericBackground({
    x: 1800,
    y: canvas.height - gameObject1.height + 60,
    image: gameObject1
  }),
  new GenericBackground({
    x: 2600,
    y: canvas.height - gameObject1.height + 60,
    image: gameObject1
  })
];

// restarts level/game if you die
function initGame() {
  frames = 0;
  player = new Player('blue');
  enemy1 = new Enemy({ x: 500, y: 500 }, player);
  enemy2 = new Enemy({ x: 800, y: 500 }, player);
  levelOne = new LevelOne(player);
  game = new Game();

  //game testing
  floor = new Platform({ x: 0, y: canvas.height - 80, image: platformImage });

  hills = new GenericBackground({ x: 0, y: 300, image: paralaxBackground });

  //lvl 1 platforms
  platforms = [
    new Platform({ x: 900, y: 700, image: platformImage }),
    new Platform({ x: 1200, y: 500, image: platformImage }),
    new Platform({ x: 1400, y: 300, image: platformImage }),
    new Platform({ x: 700, y: 500, image: platformImage }),
    new Platform({ x: 1900, y: 300, image: platformImage }),
    new Platform({ x: 2100, y: 700, image: platformImage }),
    new Platform({ x: 2500, y: 500, image: platformImage }),
    new Platform({ x: 3100, y: 400, image: platformImage })
  ];

  gameObjects = [
    new GenericBackground({
      x: 0,
      y: canvas.height - gameObject1.height + 60,
      image: gameObject1
    }),
    new GenericBackground({
      x: 1800,
      y: canvas.height - gameObject1.height + 60,
      image: gameObject1
    }),
    new GenericBackground({
      x: 2600,
      y: canvas.height - gameObject1.height + 60,
      image: gameObject1
    })
  ];
}

const playerMovement = () => {
  if (keys.right.pressed && player.position.x < canvas.width / 2) {
    player.speed.x = 5;
  } else if (keys.left.pressed && player.position.x > 200) {
    player.speed.x = -5;
  } else {
    player.speed.x = 0;

    // background

    if (keys.right.pressed) {
      frames += 5;
      console.log(frames);

      platforms.forEach(platform => {
        platform.position.x -= 5;
      });
      gameObjects.forEach(platform => {
        platform.position.x -= 4;
      });
      hills.position.x -= 2;
      floor.position.x -= 5;
      //floor2.position.x -= 5;
    } else if (keys.left.pressed) {
      platforms.forEach(platform => {
        platform.position.x += 5;
      });
      gameObjects.forEach(platform => {
        platform.position.x += 4;
      });
      frames -= 5;
      hills.position.x += 2;
      floor.position.x += 5;
      //floor2.position.x += 5;
    }
  }
};

//run game
animateGame = () => {
  game.clear();
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  hills.draw();
  gameObjects.forEach(element => {
    element.draw();
  });
  enemy1.init();
  enemy2.init();
  player.update();
  playerMovement();

  platforms.forEach(platform => {
    platform.activate(player);
  });

  floor.activate(player);
  //floor2.activate(player);

  floor.activate(enemy1);
  floor.activate(enemy2);
  // floor2.activate(enemy1);
  // floor2.activate(enemy2);

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
      player.increaseIndex();

      break;
    case 'a':
      player.speed.x -= 5;
      keys.left.pressed = true;
      player.decreaseIndex();
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

backgroundImage.addEventListener('load', () => {
  background = new Background(backgroundImage);
});
