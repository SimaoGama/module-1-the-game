const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.speed = {
      x: 0,
      y: 0,
    };
    this.width = 130;
    this.height = 160;

    this.gravity = 0.5;
    this.index = 1;
    this.loaded = false;
    this.playerFrames = 0;
    this.sprites = {
      stand: {
        right: createImage("images/player/Player_Stand_Right.png"),
        left: createImage("images/player/Player_Stand_Left.png"),
      },
      walking: {
        right: createImage("images/player/Player_Walking_Right.png"),
        // left: createImage("images/player/Player_Walking_Right.png"),
      },
    };

    this.currentSprite = this.sprites.stand.right;
    this.currentCrop = 614;

    // const img = new Image();
    // playerImage.addEventListener("load", () => {
    //   //once the img is loaded, draw it
    //   this.loaded = true;
    //   this.img = playerImage;
    //   this.draw();
    // });

    // playerImage.src = `images/player/Player_Idle.png`;
  }

  draw() {
    // ctx.fillStyle = this.color;
    // this.img.src = `images/player/Player_Idle.png`;
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(
      this.currentSprite,
      614 * this.playerFrames,
      0,
      614,
      500,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  // increaseIndex() {
  //   this.index += 1;
  //   this.index %= 15;
  // }
  // decreaseIndex() {
  //   this.index -= 1;
  //   if (this.index < 1) {
  //     this.index = 15;
  //   }
  // }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  update() {
    this.playerFrames += 1;
    if (this.playerFrames >= 30) {
      this.playerFrames = 0;
    }
    this.draw();
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

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
