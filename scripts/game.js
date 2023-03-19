// where game is initialized
class Game {
  constructor(level) {
    this.level = level
    this.frames = 0
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }


  init(level) {
    this.clear();
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // background should come from eleve
    //image.draw();
    level.start();
    player.update();
    playerMovement();

    requestAnimationFrame(this.init);
  }
}
