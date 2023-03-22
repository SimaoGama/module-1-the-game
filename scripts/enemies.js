class Enemy {
  constructor({ x, y, player, image }) {
    this.position = {
      x: x,
      y: y
    };
    this.speed = {
      x: 0,
      y: 1
    };
    this.image = image;
    this.height = 50;
    this.width = 50;
    this.player = player;
    this.colision = false;
    this.gravity = 0.8;
    this.loaded = false;
  }

  draw() {
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(enemyJs, this.position.x, this.position.y);
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
