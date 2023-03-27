'use strict';
class Enemy {
  constructor({ x, y }) {
    this.position = {
      x: x,
      y: y
    };
    this.speed = {
      x: 0,
      y: 1
    };
    //this.image = image;
    this.height = 50;
    this.width = 50;
    this.colision = false;
    this.gravity = 0.1;
    this.loaded = false;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    //ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  movement() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if (this.position.y + this.height + this.speed.y <= canvas.height) {
      this.speed.y += this.gravity;
    }
  }

  animate() {
    this.draw();
    this.movement();
  }
}
