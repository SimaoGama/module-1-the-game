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

  collision() {}
}
