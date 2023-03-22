// starting positions for level 1

function initGame() {
  frames = 0;
  player = new Player('blue');
  levelOne = new LevelOne(player);
  game = new Game();

  //game testing
  floor = new Platform({ x: 0, y: canvas.height - 80, image: platformImage });

  hills = new GenericBackground({ x: 0, y: 500, image: paralaxBackground });

  //lvl 1 platforms
  platforms = [
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
    //last platform
  ];

  gameObjects = [
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

  // gameObjects = [
  //   new GenericBackground({
  //     x: 0,
  //     y: canvas.height - gameObject1.height + 60,
  //     image: gameObject1
  //   }),
  //   new GenericBackground({
  //     x: 1800,
  //     y: canvas.height - gameObject1.height + 60,
  //     image: gameObject1
  //   }),
  //   new GenericBackground({
  //     x: 2600,
  //     y: canvas.height - gameObject1.height + 60,
  //     image: gameObject1
  //   })
  // ];
}
