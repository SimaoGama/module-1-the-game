"use strict";
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
      y: 1,
    };
    this.width = 90;
    this.height = 100;

    this.gravity = 0.2;
    this.index = 1;
    this.loaded = false;
    this.playerFrames = 0;
    this.sprites = {
      standing: {
        right: createImage("images/player/Player_Stand_Right-min.png"),
        left: createImage("images/player/Player_Stand_Left-min.png"),
      },
      walking: {
        right: createImage("images/player/Player_Walking_Right-min.png"),
        left: createImage("images/player/Player_Walking_Left-min.png"),
      },
    };

    this.currentSprite = this.sprites.standing.right;

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
    // ctx.fillStyle = 'blue';
    // //this.img.src = `images/player/Player_Idle.png`;
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    // draw sprite

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

    this.playerFrames += 1;
    if (this.playerFrames >= 30) {
      this.playerFrames = 0;
    }
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
    }
  }
}
