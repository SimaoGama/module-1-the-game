class Background {
  constructor(levelImage) {
    this.image = levelImage;
  }

  draw() {
    ctx.drawImage(this.img, 0, 0);
  }
}

class GenericBackground {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.height = this.image.height;
    this.width = this.image.width;
  }

  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y);
    //ctx.drawImage(this.image, this.position.x, this.position.y)
  }

  activate() {
    if (
      player.position.y + player.speed.y + player.height >= this.position.y &&
      player.position.y + player.height <= this.position.y &&
      player.position.x + player.width >= this.position.x &&
      player.position.x <= this.position.x + this.width
    ) {
      game.points++;
      player.speed.y = +25;

      console.log(this.counter);
    }
  }
}
