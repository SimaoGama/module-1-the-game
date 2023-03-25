// where game is initialized
class Game {
  constructor(player, level) {
    this.level = level;
    this.frames = 0;
    this.player = player;
    this.points = 0;
    this.timer = 0;
    this.currentTime = 0;
  }

  // drawObstacles() {
  //   this.obstacles.forEach(obstacle => {
  //     obstacle.x -= 1;
  //     obstacle.draw();
  //   });
  // }

  collision(player, obstacles) {
    obstacles.forEach(obstacle => {
      if (
        player.position.x < obstacle.position.x + obstacle.width &&
        player.position.x + player.width > obstacle.position.x &&
        player.position.y < obstacle.position.y + obstacle.height &&
        player.height + player.position.y > obstacle.position.y
      ) {
        player.speed.y = 0;
        player.gravity = 0;
        ctx.fillStyle = 'red';
        ctx.font = '150px Helvetica';
        ctx.fillText(`GAME OVER`, canvas.width / 2 - 450, canvas.height / 2);

        setTimeout(() => {}, '5000');
        initGame();
      }
    });
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  timeIt() {
    timer++;
  }

  checkGameOver = () => {
    const crashed = this.obstacles.some(obstacle => {
      return this.player.collisionWith(obstacle) ? true : false;
    });

    if (crashed) {
      initGame();
    }
  };

  checkGameWin() {
    if (this.frames > 13000) {
      this.currentTime = this.timer;
      ctx.fillStyle = 'green';
      ctx.font = '120px Helvetica';
      ctx.fillText(`LEVEL CLEARED!`, canvas.width / 2 - 450, canvas.height / 3);
      ctx.fillText(
        `Your Time: ${convertSeconds(this.currentTime)}!`,
        canvas.width / 2 - 450,
        canvas.height / 2
      );
      this.player.speed.y = -10;

      setTimeout(() => {
        initGame();
      }, '5000');
    } else if (this.player.position.y > canvas.height) {
      ctx.fillStyle = 'red';
      ctx.font = '150px Helvetica';
      ctx.fillText(`GAME OVER`, canvas.width / 2 - 450, canvas.height / 2);

      setTimeout(() => {
        initGame();
      }, '1000');
    }
  }

  init(player, obstacles) {
    //this.clear();
    //ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // background should come from eleve
    //this.level.start(this.player);
    //requestAnimationFrame(this.init);
    this.player.update();
    playerMovement();
    this.collision(player, obstacles);
    this.checkGameWin();
  }
}
