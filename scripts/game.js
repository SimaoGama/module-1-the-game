// where game is initialized
class Game {
  constructor(player, level) {
    this.level = level;
    this.frames = 0;
    this.player = player;
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  init() {
    this.clear();
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // background should come from eleve
    this.level.start(this.player);
    requestAnimationFrame(this.init);

    this.player.update();
    enemy1.init();
    enemy2.init();
    playerMovement();
  }
}
