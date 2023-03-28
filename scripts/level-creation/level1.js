'use strict';

function animateLevelOne() {
  game.clear();
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  hills.draw();

  game.init(player, obstacles);

  obstacles.forEach(obstacle => {
    obstacle.draw();
  });

  platforms.forEach(platform => {
    platform.activate(player);
  });

  //player.update();
  playerMovement();
  //game.collision(player, components);
  floor.activate(player);

  game.timer += 1;
  /* requestAnimationFrame(animateLevelOne); */
  displayStatusText();
}

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

// let enemies = [
//   new Enemy({ x: 100, y: 0 }),
//   new Enemy({ x: 200, y: 0 }),
//   new Enemy({ x: 300, y: 0 })
// ];

let obstacles = [
  new GameObjects({ x: 800, y: 300, image: cSharpLogo }),
  new GameObjects({ x: 1000, y: 600, image: cLogo }),
  new GameObjects({ x: 1200, y: 0, image: cLogo }),
  new GameObjects({ x: 2000, y: 0, image: cLogo }),
  new GameObjects({ x: 2100, y: 600, image: cLogo }),
  new GameObjects({ x: 2800, y: 700, image: cLogo }),
  new GameObjects({ x: 3200, y: 100, image: cLogo }),
  new GameObjects({ x: 3600, y: 1000, image: cLogo }),
  new GameObjects({ x: 3900, y: 600, image: cLogo }),
  new GameObjects({ x: 4200, y: 700, image: cLogo }),
  new GameObjects({ x: 4500, y: 400, image: cLogo }),
  new GameObjects({ x: 4750, y: 300, image: cLogo }),
  new GameObjects({ x: 4900, y: 0, image: cLogo }),
  new GameObjects({ x: 5000, y: 400, image: cLogo }),
  new GameObjects({ x: 5200, y: 700, image: cLogo }),
  new GameObjects({ x: 5600, y: 0, image: cLogo }),
  new GameObjects({ x: 5800, y: 400, image: cLogo }),
  new GameObjects({ x: 6000, y: 700, image: cLogo }),
  new GameObjects({ x: 6300, y: 0, image: cLogo }),
  new GameObjects({ x: 6750, y: 400, image: cLogo }),
  new GameObjects({ x: 6900, y: 700, image: cLogo }),
  new GameObjects({ x: 7000, y: 700, image: cLogo }),
  new GameObjects({ x: 7300, y: 0, image: cLogo }),
  new GameObjects({ x: 7750, y: 400, image: cLogo }),
  new GameObjects({ x: 7900, y: 700, image: cLogo })
];