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
    this.width = 614 / 4;
    this.height = 564 / 4;
    this.color = color;
    this.gravity = 0.8;
    this.index = 1;
    this.loaded = false;

    // const img = new Image();
    img.addEventListener('load', () => {
      //once the img is loaded, draw it
      this.loaded = true;
      this.img = img;
      this.draw();
    });

    img.src = `images/player/Run (${0}).png`;
  }

  draw() {
    // ctx.fillStyle = this.color;
    this.img.src = `images/player/Run (${this.index}).png`;
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  increaseIndex() {
    this.index += 1;
    this.index %= 15;
  }
  decreaseIndex() {
    console.log(this.index);

    this.index -= 1;
    if (this.index < 0) {
      this.index = 15;
    }
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  update() {
    if (this.loaded) {
      this.draw();
      this.position.x += this.speed.x;
      this.position.y += this.speed.y;
    }

    //gravity
    if (this.position.y + this.height + this.speed.y <= canvas.height) {
      this.speed.y += this.gravity;
    }
    // makes player fall out of image
    // else {
    //   this.speed.y = 0;
    // }
  }
}
