class Platform {
  constructor({ x, y }) {
    this.position = {
      x: x,
      y: y
    };

    this.height = 50;
    this.width = 150;
  }

  draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  collision(player, platform) {
    if (
      player.position.y + player.speed.y + player.height >= this.position.y &&
      player.position.y + player.height <= this.position.y && player.position.x + player.width >= this.position.x && player.position.x <= this.position.x + this.width
    ) {
      player.speed.y = 0;
    }
  }

  activate(player){
    this.draw()
    this.collision(player, platform)
  }
}
