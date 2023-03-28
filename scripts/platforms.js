"use strict";
class Platform {
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
    // ctx.fillStyle = 'black';
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
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
  }

  collisionSide(player) {
    if (
      player.position.x + player.width >= this.position.x &&
      player.position.x <= this.position.x + this.width
    ) {
      player.speed.x = 0;
    }
  }

  activate(player) {
    this.draw();
    this.collision(player);
  }
}

class PlatformLogo extends Platform {
  constructor({ x, y, image }) {
    super({
      x,
      y,
      image,
    });
    this.position = {
      x,
      y,
    };
    this.image = image;
  }

  collision(player) {
    if (
      player.position.y + player.speed.y + player.height >= this.position.y &&
      player.position.y + player.height <= this.position.y &&
      player.position.x + player.width >= this.position.x &&
      player.position.x <= this.position.x + this.width
    ) {
      player.speed.y = -15;
    }
  }
}
