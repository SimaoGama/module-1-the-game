"use strict";
// where game is initialized
class Game {
  constructor(player, level) {
    this.level = level;
    this.frames = 0;
    this.player = player;
    this.points = 0;
    this.timer = 0;
    this.currentTime = 0;
    this.isRunning = true;
  }

  // drawObstacles() {
  //   this.obstacles.forEach(obstacle => {
  //     obstacle.x -= 1;
  //     obstacle.draw();
  //   });
  // }

  collision(player, obstacles) {
    obstacles.forEach((obstacle) => {
      if (
        player.position.x < obstacle.position.x + obstacle.width &&
        player.position.x + player.width > obstacle.position.x &&
        player.position.y < obstacle.position.y + obstacle.height &&
        player.height + player.position.y > obstacle.position.y
      ) {
        player.speed.y = 0;
        player.gravity = 0;
        ctx.fillStyle = "red";
        ctx.font = "150px Helvetica";
        ctx.fillText(`GAME OVER`, canvas.width / 2 - 450, canvas.height / 2);

        initLevelOne();
        initLevelTwo();
        // setTimeout(() => {}, "5000");
        // levelOneActive ? initLevelOne() : initLevelTwo();
      }
    });
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  timeIt() {
    timer++;
  }

  checkGameWin() {
    if (levelOneActive) {
      if (this.frames > 10000) {
        this.currentTime = this.timer;
        ctx.fillStyle = "green";
        ctx.font = "120px Helvetica";
        ctx.fillText(
          `LEVEL CLEARED!`,
          canvas.width / 2 - 450,
          canvas.height / 3
        );
        stopGame();

        ctx.fillText(
          `Your time: ${(game.timer * 0.01).toFixed(1)}`,
          canvas.width / 2 - 450,
          canvas.height / 2
        );

        this.player.speed.y = -10;

        setTimeout(() => {
          mainScreen();
        }, "2000");
      } else if (this.player.position.y > canvas.height) {
        ctx.fillStyle = "red";
        ctx.font = "150px Helvetica";

        ctx.fillText(`GAME OVER`, canvas.width / 2 - 450, canvas.height / 2);

        setTimeout(() => {
          initLevelOne();
        }, "1000");
      }
    } else if (levelTwoActive) {
      if (this.frames > 10000) {
        this.currentTime = this.timer;
        ctx.fillStyle = "green";
        ctx.font = "120px Helvetica";
        ctx.fillText(
          `LEVEL CLEARED!`,
          canvas.width / 2 - 450,
          canvas.height / 3
        );
        stopGame();
        ctx.fillText(
          `Your time: ${(game.timer * 0.01).toFixed(1)}`,
          canvas.width / 2 - 450,
          canvas.height / 2
        );
        this.player.speed.y = -10;
        setTimeout(() => {
          mainScreen();
        }, "2000");
      } else if (this.player.position.y > canvas.height) {
        ctx.fillStyle = "red";
        ctx.font = "150px Helvetica";

        ctx.fillText(`GAME OVER`, canvas.width / 2 - 450, canvas.height / 2);

        setTimeout(() => {
          initLevelTwo();
        }, "1000");
      }
    }
  }

  init(player, obstacles) {
    //this.clear();
    //ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // background should come from eleve
    //this.level.start(this.player);
    //requestAnimationFrame(this.init);
    player.update();
    playerMovement();
    this.collision(player, obstacles);
    this.checkGameWin();
  }
}
