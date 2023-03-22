console.log('JS loaded');

// DOM + Images
const canvas = document.getElementById('ironhacker');
const ctx = canvas.getContext('2d');

const layover = document.getElementById('layover');

const backgroundImage = new Image();
// backgroundImage.src = '../images/backgrounds/Sidescroller-background.png';
backgroundImage.src = '../images/backgrounds/BG.png';

const paralaxBackground = new Image();
paralaxBackground.src = '../images/hills.png';

const platformImage = new Image();
platformImage.src = './images/platform.png';

const gameObject1 = new Image();
gameObject1.src = './images/gameobject1.png';

const javaScriptBackground = new Image();
javaScriptBackground.src = 'images/enemies/js-enemy.png';
const htmlBackground = new Image();
htmlBackground.src = 'images/enemies/html-enemy.png';
const cssBackground = new Image();
cssBackground.src = 'images/enemies/css-enemy.png';

const playerImage = new Image();
playerImage.src = `images/player/Run (${16}).png`;

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

let hills = new GenericBackground({ x: 0, y: 500, image: paralaxBackground });

//lvl 1 platforms
let platforms = [
  new Platform({ x: -500, y: canvas.height - 80, image: platformImage }),
  new Platform({ x: 1200, y: 700, image: platformImage }),
  new Platform({ x: 1500, y: 1500, image: platformImage }),
  new Platform({ x: 2700, y: 300, image: platformImage }),
  new Platform({ x: 3200, y: 500, image: platformImage }),
  new Platform({ x: 3700, y: 300, image: platformImage }),
  new Platform({ x: 4900, y: 700, image: platformImage }),
  new Platform({ x: 5500, y: 500, image: platformImage }),
  new Platform({ x: 6100, y: 400, image: platformImage }),
  new Platform({ x: 8100, y: 400, image: platformImage }),
  new Platform({ x: 9000, y: canvas.height - 80, image: platformImage }),
  new Platform({ x: 9500, y: canvas.height - 80, image: platformImage }),
  new Platform({ x: 1000, y: canvas.height - 80, image: platformImage })
];

let gameObjects = [
  new GenericBackground({
    x: -500,
    y: canvas.height - javaScriptBackground.height - 160,
    image: javaScriptBackground
  }),
  new GenericBackground({
    x: 2500,
    y: canvas.height - htmlBackground.height,
    image: htmlBackground
  }),
  new GenericBackground({
    x: 4500,
    y: canvas.height - cssBackground.height,
    image: cssBackground
  })
];

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
      player.increaseIndex();
      console.log(frames);

      platforms.forEach(platform => {
        platform.position.x -= 5;
      });
      gameObjects.forEach(platform => {
        platform.position.x -= 5;
      });

      hills.position.x -= 2;
      floor.position.x -= 5;
      //floor2.position.x -= 5;
    } else if (keys.left.pressed) {
      player.decreaseIndex();
      platforms.forEach(platform => {
        platform.position.x += 5;
      });
      gameObjects.forEach(platform => {
        platform.position.x += 5;
      });
      // gameObjects.forEach(platform => {
      //   platform.position.x += 4;
      // });
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
  player.update();
  playerMovement();

  platforms.forEach(platform => {
    platform.activate(player);
  });

  floor.activate(player);
  //floor2.activate(player);

  // floor.activate(finishingLine1);
  // floor.activate(enemy2);
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
