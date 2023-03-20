class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    };
    this.image = image;
    this.height = this.image.height;
    this.width = this.image.width;
  }

  draw() {
    // ctx.fillStyle = 'black';
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  collision(player) {
    if (
      player.position.y + player.speed.y + player.height >= this.position.y &&
      player.position.y + player.height <= this.position.y &&
      player.position.x + player.width >= this.position.x &&
      player.position.x <= this.position.x + this.width
    ) {
      player.speed.y = 0;
    }

    if (frames > 3000) {
      console.log('LEVEL CLEARED');
      initGame(); //restarts the level, ideally starts level 2
    }

    if (player.position.y > canvas.height) {
      initGame();
    }
  }

  activate(player) {
    this.draw();
    this.collision(player);
  }
}
