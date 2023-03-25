// starting positions for level 1

function initGame() {
  player = new Player("blue");
  levelOne = new LevelOne(player);
  game = new Game(player, levelOne);
  frames = game.frames;
  enemies = [
    new Enemy({ x: 0, y: 0, image: JavaScriptEnemy }),
    new Enemy({ x: 100, y: 0, image: JavaScriptEnemy }),
  ];

  //game testing
  floor = new Platform({
    x: 0,
    y: canvas.height - 80,
    image: platformImage,
  });

  hills = new GenericBackground({ x: 0, y: 500, image: paralaxBackground });

  //lvl 1 platforms
  platforms = [
    new Platform({ x: -500, y: canvas.height - 80, image: platformImage }),
    new Platform({ x: 1400, y: 500, image: htmlBackground }),
    new Platform({ x: 2400, y: 300, image: javaScriptBackground }),
    new Platform({ x: 3400, y: 500, image: htmlBackground }),
    new Platform({ x: 4500, y: 600, image: cssBackground }),
    new Platform({ x: 5300, y: 500, image: javaScriptBackground }),
    new Platform({ x: 6500, y: 400, image: htmlBackground }),
    new Platform({ x: 7900, y: 400, image: javaScriptBackground }),
    new Platform({ x: 9000, y: canvas.height - 90, image: cssBackground }),
    new Platform({
      x: 9500,
      y: canvas.height - 90,
      image: javaScriptBackground,
    }),
    new Platform({ x: 10000, y: canvas.height - 90, image: htmlBackground }),
    new Platform({ x: 11000, y: canvas.height - 90, image: cssBackground }),
    new Platform({
      x: 12000,
      y: canvas.height - 90,
      image: javaScriptBackground,
    }),
    new Platform({ x: 13000, y: canvas.height - 90, image: htmlBackground }),
    new Platform({ x: 14000, y: canvas.height - 90, image: cssBackground }),
  ];

  gameObjects = [
    new GenericBackground({
      x: -500,
      y: canvas.height - javaScriptBackground.height - 160,
      image: javaScriptBackground,
    }),
    new GenericBackground({
      x: 2800,
      y: canvas.height - htmlBackground.height - 500,
      image: htmlBackground,
    }),
    new GenericBackground({
      x: 4800,
      y: canvas.height - cssBackground.height,
      image: cssBackground,
    }),
    new GenericBackground({
      x: 9500,
      y: canvas.height - cssBackground.height,
      image: cssBackground,
    }),
  ];

  gameObjects = [
    new GenericBackground({
      x: -500,
      y: canvas.height - javaScriptBackground.height - 160,
      image: javaScriptBackground,
    }),
    new GenericBackground({
      x: 2500,
      y: canvas.height - htmlBackground.height,
      image: htmlBackground,
    }),
    new GenericBackground({
      x: 4500,
      y: canvas.height - cssBackground.height,
      image: cssBackground,
    }),
  ];
}
