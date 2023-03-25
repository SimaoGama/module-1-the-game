console.log('JS loaded');

// game area

// DOM + Images
const canvas = document.getElementById('ironhacker');
const ctx = canvas.getContext('2d');
const layover = document.getElementById('layover');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const backgroundImage = createImage('images/backgrounds/nordic.jpg');
const paralaxBackground = createImage('../images/hills.png');
const platformImage = createImage('./images/platform.png');
// const gameObject1 = createImage('./images/gameobject1.png');
const javaScriptBackground = createImage('images/enemies/js-enemy.png');
const htmlBackground = createImage('images/enemies/html-enemy.png');
const cssBackground = createImage('images/enemies/css-enemy.png');

//const mossImage = createImage("images/download.png");

displayStatusText = () => {
  ctx.fillStyle = 'black';
  ctx.font = '20px Helvetica';
  if (game.frames < 0) {
    ctx.fillText(`Frames: 0`, 20, 40);
  } else ctx.fillText(`Frames: ${game.frames}`, 20, 40);

  ctx.fillText(`Level: ${levelOne.name}`, 20, 90);
  ctx.fillText(`Points: ${game.points}`, 20, 140);
  ctx.fillText(`Time: ${(game.timer * 0.01).toFixed(1)}`, 20, 190);
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

function convertSeconds(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  return `${min} : ${sec}`;
}

//game assets
let player = new Player('blue');
let levelOne = new LevelOne(player);
let game = new Game(player, levelOne);
let frames = game.frames;

//game testing
let floor = new Platform({ x: 0, y: canvas.height - 80, image: platformImage });

let hills = new GenericBackground({ x: 0, y: 500, image: paralaxBackground });

//lvl 1 platforms
let platforms = [
  new Platform({ x: -500, y: canvas.height - 80, image: platformImage }),
  new Platform({ x: 1400, y: 500, image: htmlBackground }),
  new Platform({ x: 2400, y: 300, image: javaScriptBackground }),
  new Platform({ x: 3400, y: 500, image: htmlBackground }),
  new Platform({ x: 4500, y: 600, image: cssBackground }),
  new Platform({ x: 5300, y: 500, image: javaScriptBackground }),
  new Platform({ x: 6500, y: 400, image: htmlBackground }),
  new Platform({ x: 7900, y: 400, image: javaScriptBackground }),
  new Platform({ x: 9000, y: canvas.height - 90, image: cssBackground }),
  new Platform({ x: 9500, y: canvas.height - 90, image: javaScriptBackground }),
  new Platform({ x: 10000, y: canvas.height - 90, image: htmlBackground }),
  new Platform({ x: 11000, y: canvas.height - 90, image: cssBackground }),
  new Platform({
    x: 12000,
    y: canvas.height - 90,
    image: javaScriptBackground
  }),
  new Platform({ x: 13000, y: canvas.height - 90, image: htmlBackground }),
  new Platform({ x: 14000, y: canvas.height - 90, image: cssBackground })
];

let enemies = [
  new Enemy({ x: 100, y: 0 }),
  new Enemy({ x: 200, y: 0 }),
  new Enemy({ x: 300, y: 0 })
];

let components = [
  new GameObjects({ x: 1000, y: 300 }),
  new GameObjects({ x: 1200, y: 600 }),
  new GameObjects({ x: 2000, y: 700 }),
  new GameObjects({ x: 25000, y: 300 })
];

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

      platforms.forEach(platform => {
        platform.position.x -= 5;
      });
      components.forEach(component => {
        component.position.x -= 5;
      });

      hills.position.x -= 2;
      floor.position.x -= 5;
      //floor2.position.x -= 5;
    } else if (keys.left.pressed) {
      // player.decreaseIndex();
      platforms.forEach(platform => {
        platform.position.x += 5;
      });
      components.forEach(component => {
        component.position.x += 5;
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
animateGame = () => {
  game.clear();
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  hills.draw();

  // gameObjects.forEach((element) => {
  //   element.draw();
  //   element.activate();
  // });

  game.init();

  enemies.forEach(enemy => {
    enemy.draw();
    enemy.animate();
  });

  components.forEach(component => {
    component.draw();
  });

  platforms.forEach(platform => {
    platform.activate(player);
  });

  //player.update();
  playerMovement();
  floor.activate(player);

  game.timer += 1;
  requestAnimationFrame(animateGame);
  displayStatusText();
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
      player.currentSprite = player.sprites.walking.right;
      break;
    case 'a':
      player.speed.x -= 5;
      keys.left.pressed = true;
      player.currentSprite = player.sprites.walking.left;
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
      player.currentSprite = player.sprites.standing.right;
      break;
    case 'a':
      player.speed.x = 0;
      keys.left.pressed = false;
      player.currentSprite = player.sprites.standing.left;

      break;
  }
});

backgroundImage.addEventListener('load', () => {
  background = new Background(backgroundImage);
});
