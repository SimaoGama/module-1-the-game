class Enemy {
  constructor({ x, y }, player) {
    this.position = {
      x: x,
      y: y
    };
    this.speed = {
      x: 0,
      y: 1
    };
    this.height = 50;
    this.width = 50;
    this.player = player;
    this.colision = false;
    this.gravity = 0.8;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  attack() {}

  movement() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if (this.position.y + this.height + this.speed.y <= canvas.height) {
      this.speed.y += this.gravity;
    } else {
      this.speed.y = 0;
    }
  }

  init() {
    this.draw();
    this.movement();
  }
}

class JavaScriptEnemy extends Enemy {}
class CascadingStyleSheetsEnemy extends Enemy {}
class HtmlEnemy extends Enemy {}
