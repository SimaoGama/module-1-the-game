// starting positions for level 1
"use strict";
function initLevelOne() {
  player = new Player("blue");
  levelOne = new LevelOne(player);
  game = new Game(player, levelOne);
  frames = game.frames;
  playMusic();

  //game testing
  floor = new Platform({ x: 0, y: canvas.height - 80, image: platformImage });

  hills = new GenericBackground({ x: 0, y: 500, image: paralaxBackground });

  //lvl 1 platforms
  platforms = [
    new Platform({ x: -500, y: canvas.height - 80, image: platformImage }),
    new Platform({ x: 1000, y: 700, image: cssBackground }),
    new Platform({ x: 1400, y: 500, image: htmlBackground }),
    new Platform({ x: 1800, y: 300, image: javaScriptBackground }),
    new Platform({ x: 2400, y: 300, image: cssBackground }),
    new Platform({ x: 2800, y: 700, image: htmlBackground }),
    new Platform({ x: 3400, y: 500, image: javaScriptBackground }),
    new Platform({ x: 3800, y: 700, image: cssBackground }),
    new Platform({ x: 4200, y: 300, image: htmlBackground }),
    new Platform({ x: 4600, y: 600, image: cssBackground }),
    new Platform({ x: 5000, y: 500, image: javaScriptBackground }),
    new Platform({ x: 5400, y: 300, image: htmlBackground }),
    new Platform({ x: 5600, y: 600, image: cssBackground }),
    new Platform({ x: 6000, y: 250, image: htmlBackground }),
    new Platform({ x: 6400, y: 300, image: javaScriptBackground }),
    new Platform({ x: 6800, y: 600, image: cssBackground }),
    new Platform({ x: 7200, y: 750, image: htmlBackground }),
    new Platform({ x: 7600, y: 800, image: javaScriptBackground }),
    new Platform({ x: 8000, y: 400, image: cssBackground }),
    new Platform({ x: 8600, y: 500, image: htmlBackground }),
    new Platform({ x: 9000, y: 100, image: cssBackground }),
    new Platform({ x: 9500, y: 700, image: htmlBackground }),
    new Platform({ x: 10200, y: 600, image: nodeLogo }),
  ];

  // let enemies = [
  //   new Enemy({ x: 100, y: 0 }),
  //   new Enemy({ x: 200, y: 0 }),
  //   new Enemy({ x: 300, y: 0 })
  // ];

  obstacles = [
    new GameObjects({ x: 700, y: 300, image: cLogo }),
    new GameObjects({ x: 900, y: 600, image: cLogo }),
    new GameObjects({ x: 1200, y: 0, image: cLogo }),
    new GameObjects({ x: 1600, y: 300, image: cLogo }),
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
    new GameObjects({ x: 8200, y: 0, image: cLogo }),
    new GameObjects({ x: 8200, y: 700, image: cLogo }),
    new GameObjects({ x: 8900, y: 0, image: cLogo }),
    new GameObjects({ x: 8900, y: 700, image: cLogo }),
    new GameObjects({ x: 9200, y: 0, image: cLogo }),
    new GameObjects({ x: 9200, y: 700, image: cLogo }),
    new GameObjects({ x: 9400, y: 0, image: cLogo }),
    new GameObjects({ x: 9750, y: 700, image: cLogo }),
  ];
}

function initLevelTwo() {
  player = new Player("blue");
  frames = game.frames;
  game = new Game(player, levelOne);
  playMusic();

  // game testing
  floor = new Platform({ x: 0, y: canvas.height - 80, image: platformImage });

  hills = new GenericBackground({ x: 0, y: 500, image: paralaxBackground });
  platformsLvl2 = [
    new Platform({ x: -500, y: canvas.height - 80, image: platformImage }),
    new Platform({ x: 800, y: 650, image: htmlBackground }),
    new Platform({ x: 1400, y: 600, image: htmlBackground }),
    new Platform({ x: 1800, y: 400, image: htmlBackground }),
    new Platform({ x: 2400, y: 300, image: htmlBackground }),
    new Platform({ x: 2800, y: 700, image: htmlBackground }),
    new Platform({ x: 3400, y: 500, image: htmlBackground }),
    new Platform({ x: 3900, y: 600, image: htmlBackground }),
    new Platform({ x: 4500, y: 600, image: cssBackground }),
    new Platform({ x: 5300, y: 500, image: cssBackground }),
    new Platform({ x: 5900, y: 300, image: cssBackground }),
    new Platform({ x: 6400, y: 700, image: cssBackground }),
    new Platform({ x: 7100, y: 400, image: cssBackground }),
    new Platform({ x: 7800, y: 650, image: cssBackground }),
    new Platform({ x: 8400, y: 450, image: javaScriptBackground }),
    new Platform({ x: 9000, y: 300, image: javaScriptBackground }),
    new Platform({ x: 9500, y: 500, image: javaScriptBackground }),
    new Platform({ x: 10100, y: 700, image: javaScriptBackground }),
    new Platform({ x: 10900, y: 500, image: reactLogo }),
  ];

  // let enemies = [
  //   new Enemy({ x: 100, y: 0 }),
  //   new Enemy({ x: 200, y: 0 }),
  //   new Enemy({ x: 300, y: 0 })
  // ];

  obstaclesLvl2 = [
    new GameObjects({ x: 600, y: 0, image: cSharpLogo }),
    new GameObjects({ x: 700, y: 600, image: cSharpLogo }),
    new GameObjects({ x: 1000, y: 600, image: cSharpLogo }),
    new GameObjects({ x: 1200, y: 600, image: cSharpLogo }),
    new GameObjects({ x: 1300, y: 0, image: cSharpLogo }),
    new GameObjects({ x: 2100, y: 0, image: cSharpLogo }),
    new GameObjects({ x: 2150, y: 600, image: cSharpLogo }),
    new GameObjects({ x: 2200, y: 100, image: cSharpLogo }),
    new GameObjects({ x: 2400, y: 200, image: cSharpLogo }),
    new GameObjects({ x: 2700, y: 700, image: cSharpLogo }),
    new GameObjects({ x: 2800, y: 900, image: cSharpLogo }),
    new GameObjects({ x: 3200, y: 100, image: cSharpLogo }),
    new GameObjects({ x: 3600, y: 1000, image: cSharpLogo }),
    new GameObjects({ x: 3900, y: 600, image: cSharpLogo }),
    new GameObjects({ x: 4200, y: 700, image: cSharpLogo }),
    new GameObjects({ x: 4500, y: 400, image: cSharpLogo }),
    new GameObjects({ x: 4750, y: 300, image: cSharpLogo }),
    new GameObjects({ x: 4900, y: 0, image: cSharpLogo }),
    new GameObjects({ x: 5000, y: 400, image: cSharpLogo }),
    new GameObjects({ x: 5200, y: 700, image: cSharpLogo }),
    new GameObjects({ x: 5600, y: 0, image: cSharpLogo }),
    new GameObjects({ x: 5800, y: 400, image: cSharpLogo }),
    new GameObjects({ x: 6000, y: 700, image: cSharpLogo }),
    new GameObjects({ x: 6300, y: 0, image: cSharpLogo }),
    new GameObjects({ x: 6750, y: 400, image: cSharpLogo }),
    new GameObjects({ x: 6900, y: 700, image: cSharpLogo }),
    new GameObjects({ x: 7000, y: 700, image: cSharpLogo }),
    new GameObjects({ x: 7300, y: 0, image: cSharpLogo }),
    new GameObjects({ x: 7750, y: 400, image: cSharpLogo }),
    new GameObjects({ x: 7900, y: 700, image: cSharpLogo }),
    new GameObjects({ x: 8200, y: 100, image: cSharpLogo }),
    new GameObjects({ x: 8900, y: 200, image: cSharpLogo }),
    new GameObjects({ x: 9100, y: 700, image: cSharpLogo }),
    new GameObjects({ x: 9500, y: 800, image: cSharpLogo }),
    new GameObjects({ x: 9800, y: 600, image: cSharpLogo }),
    new GameObjects({ x: 10000, y: 100, image: cSharpLogo }),
    new GameObjects({ x: 10350, y: 900, image: cSharpLogo }),
    new GameObjects({ x: 10450, y: 100, image: cSharpLogo }),
    new GameObjects({ x: 10550, y: 900, image: cSharpLogo }),
    new GameObjects({ x: 10650, y: 100, image: cSharpLogo }),
    new GameObjects({ x: 10350, y: 500, image: cSharpLogo }),
    new GameObjects({ x: 10450, y: 600, image: cSharpLogo }),
    new GameObjects({ x: 10650, y: 500, image: cSharpLogo }),
  ];
}
