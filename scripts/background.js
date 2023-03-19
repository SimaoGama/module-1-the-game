class Background {
  constructor(levelImage) {
    this.image = levelImage;
  }

  draw() {
    ctx.drawImage(this.img, 0, 0);
  }
}



class GenericBackground {
  constructor({ x, y, image}) {
    this.position = {
      x,
      y
    };
    this.image = image;
    this.height = 50;
    this.width = 150;
  }

  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y)
    //ctx.drawImage(this.image, this.position.x, this.position.y)
  }
}
