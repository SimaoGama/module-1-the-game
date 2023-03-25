class GameObjects {
  constructor({ x, y }) {
    this.position = {
      x,
      y
    };
    //this.image = image;
    this.height = 50;
    this.width = 50;
    this.currentPositionY = 0;
  }

  left = () => this.position.x;
  right = () => this.position.x + this.width;
  top = () => this.position.y;
  bottom = () => this.position.y + this.heigth;

  collisionWith = component => {
    return !(
      this.bottom() < component.top() ||
      this.top() > component.bottom() ||
      this.right() < component.left() ||
      this.left() > component.right()
    );
  };

  moveUp() {
    this.position.y--;
  }

  draw() {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    this.position.y++;
    setInterval(this.moveUp, '2000');
    //ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  activate() {}
}
