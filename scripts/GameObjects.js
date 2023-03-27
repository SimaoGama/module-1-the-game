'use strict';

class GameObjects {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    };
    this.image = image;
    this.height = 50;
    this.width = 50;
    this.currentPositionY = this.position.y;
    this.startingPositionY = this.position.y;
    this.speed = 5;
  }

  left = () => {
    return this.position.x;
  };
  right = () => {
    return this.position.x + this.width;
  };
  top = () => {
    return this.position.y;
  };
  bottom = () => {
    return this.position.y + this.height;
  };

  collisionWith = component => {
    return !(
      this.bottom() < component.top() ||
      this.top() > component.bottom() ||
      this.right() < component.left() ||
      this.left() > component.right()
    );
  };

  moveDowm = () => {
    this.position.y += 5;
  };

  moveUp = () => {
    this.position.y -= 5;
  };

  draw = () => {
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.image.width,
      this.image.height
    );

    /* this.position.y += this.movement;

    if (this.top() >= 0) {
      this.movement = -5;
    } else if (this.bottom() < canvas.height) {
      this.movement = 5;
    } */

    this.position.y += this.speed;

    if (
      this.position.y + this.speed > canvas.height ||
      this.position.y + this.speed < 0
    ) {
      this.speed *= -1;
    }

    /* if (this.bottom() < canvas.height) {
      this.position.y -= 5;
    } else if (this.top() < 0) {
      this.position.y += 5;
    } */

    //ctx.drawImage(this.image, this.position.x, this.position.y);
  };

  activate() {}
}
