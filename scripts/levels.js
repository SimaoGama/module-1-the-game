class Levels {
  constructor(player) {
    this.player = player;
  }

  playerMovement = player => {
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
      } else if (keys.left.pressed) {
        platform.position.x += 5;
        platform2.position.x += 5;
        platform3.position.x += 5;
        platform4.position.x += 5;
        platform5.position.x += 5;
      }
    }
  };
}

class LevelOne extends Levels {
  constructor(player) {
    super(player);
    this.platforms = [];
  }

  lvlOnePlatforms(player) {
    const levelOnePlatforms = [
      { x: 900, y: 700 },
      { x: 1200, y: 500 },
      { x: 1400, y: 300 },
      { x: 700, y: 500 },
      { x: 1900, y: 300 }
    ];

    this.platforms = levelOnePlatforms.map(platform => {
      return new Platform(platform);
    });

    this.platforms.forEach(platform => platform.activate(player));
  }

  start(player) {
    requestAnimationFrame(this.start);
    //lvlOnePlatforms(player);
    this.playerMovement();
  }
}
