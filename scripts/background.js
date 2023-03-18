class Background {
  constructor(levelImage) {
    this.image = levelImage;
  }

  draw() {
    ctx.drawImage(this.img, 0, 0);
  }
}
