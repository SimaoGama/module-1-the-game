class Levels {
  constructor(player) {
    this.player = player;
    this.frames = 0;
  }

  playerMovement = () => {
    if (keys.right.pressed && player.position.x < canvas.width / 2) {
      player.speed.x = 5;
    } else if (keys.left.pressed && player.position.x > 200) {
      player.speed.x = -5;
    } else {
      player.speed.x = 0;

      // background

      if (keys.right.pressed) {
        this.frames += 5;
        platforms.forEach(platform => {
          platform.position.x -= 5;
        });
        gameObjects.forEach(platform => {
          platform.position.x -= 4;
        });
        floor.position.x -= 5;
        floor2.position.x -= 5;
      } else if (keys.left.pressed) {
        this.frames -= 5;
        platforms.forEach(platform => {
          platform.position.x += 5;
        });
        gameObjects.forEach(platform => {
          platform.position.x += 4;
        });
        floor.position.x += 5;
        floor2.position.x += 5;
      }
    }
  };
}

class LevelOne extends Levels {
  constructor(player, frames) {
    super(player, frames);
    this.platforms = [];
  }

  // lvlOnePlatforms(player) {
  //   const levelOnePlatforms = [
  //     { x: 900, y: 700 },
  //     { x: 1200, y: 500 },
  //     { x: 1400, y: 300 },
  //     { x: 700, y: 500 },
  //     { x: 1900, y: 300 },
  //   ];

  //   this.platforms = levelOnePlatforms.map((platform) => {
  //     return new Platform(platform);
  //   });

  //   this.platforms.forEach((platform) => platform.activate(player));
  // }

  checkLevelClear(player) {}

  start(player) {
    requestAnimationFrame(this.start);
    //lvlOnePlatforms(player);
    this.playerMovement();
  }
}
