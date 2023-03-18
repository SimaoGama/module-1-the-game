const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

class Player {
  constructor(color) {
    this.position = {
      x: 100,
      y: 100
    };
    this.speed = {
      x: 0,
      y: 1
    };
    this.width = 50;
    this.height = 50;
    this.color = color;
    this.gravity = 0.8;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  update() {
    this.draw();
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //gravity
    if (this.position.y + this.height + this.speed.y <= canvas.height) {
      this.speed.y += this.gravity;
    } else {
      this.speed.y = 0;
    }
  }
}
