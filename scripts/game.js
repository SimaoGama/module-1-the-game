// where game is initialized
class Game {
  constructor() {}

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  init(level) {
    this.clear();
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    //image.draw();
    level.start();
    player.update();
    playerMovement();

    requestAnimationFrame(this.init);
  }
}
