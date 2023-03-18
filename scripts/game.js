// where game is initialized
class Game {
  constructor() {}

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  init() {}
}

newGame = new Game();
newGame.init();
