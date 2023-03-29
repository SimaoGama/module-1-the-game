"use strict";
// where game is initialized

const levelOneOlElement = document.querySelector(".level-one");
const levelTwoOlElement = document.querySelector(".record-list ol:last-child");

class Records {
  constructor() {
    this.records = {
      name: "",
      time: [],
    };
    this.bestTime = 0;
  }
}

let record = new Records();
let recordLvl2 = new Records();

function populateList() {
  if (record && record.time && record.time.length > 0) {
    // Populate LEVEL ONE list
    for (let i = 0; i < record.time.length; i++) {
      const liElement = document.createElement("li");
      liElement.innerHTML = record.time[i];
      levelOneOlElement.appendChild(liElement);
    }

    // Populate LEVEL TWO list
    for (let i = 0; i < recordLvl2.time.length; i++) {
      const liElement = document.createElement("li");
      liElement.innerHTML = recordLvl2.time[i];
      levelTwoOlElement.appendChild(liElement);
    }
  } else {
    console.log("The records.time array is empty or undefined.");
  }
}

class Game {
  constructor(player, level) {
    this.level = level;
    this.frames = 0;
    this.player = player;
    this.points = 0;
    this.timer = 0;
    this.currentTime = 0;
    // this.bestTime = 0;
  }

  // drawObstacles() {
  //   this.obstacles.forEach(obstacle => {
  //     obstacle.x -= 1;
  //     obstacle.draw();
  //   });
  // }

  collision(player, obstacles) {
    obstacles.forEach((obstacle) => {
      if (
        player.position.x < obstacle.position.x + obstacle.width &&
        player.position.x + player.width > obstacle.position.x &&
        player.position.y < obstacle.position.y + obstacle.height &&
        player.height + player.position.y > obstacle.position.y
      ) {
        player.speed.y = 0;
        player.gravity = 0;
        ctx.fillStyle = "red";
        ctx.font = "150px Helvetica";
        ctx.fillText(`GAME OVER`, canvas.width / 2 - 450, canvas.height / 2);

        initLevelOne();
        initLevelTwo();
        // setTimeout(() => {}, "5000");
        // levelOneActive ? initLevelOne() : initLevelTwo();
      }
    });
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  timeIt() {
    timer++;
  }

  showBestTime() {
    if (levelOneActive) {
      this.currentTime = (this.timer * 0.01).toFixed(1);

      if (record.bestTime === 0) {
        record.bestTime = this.currentTime;
        record.records.time.push(record.bestTime);
      } else if (this.currentTime < record.bestTime) {
        record.bestTime = this.currentTime;
        record.records.time.push(record.bestTime);
        record.records.time.forEach((time) => {
          recordListLevelOne.innerText = time;
        });
      }
      console.log(record.records.time);
    } else if (levelTwoActive) {
      this.currentTime = (this.timer * 0.01).toFixed(1);

      if (recordLvl2.bestTime === 0) {
        recordLvl2.bestTime = this.currentTime;
        recordLvl2.records.time.push(recordLvl2.bestTime);
      } else if (this.currentTime < recordLvl2.bestTime) {
        recordLvl2.bestTime = this.currentTime;
        recordLvl2.records.time.push(recordLvl2.bestTime);
      }
      console.log(recordLvl2.records.time);
    }
  }

  checkGameWin() {
    if (levelOneActive) {
      if (this.frames > 9200) {
        this.currentTime = this.timer;
        ctx.fillStyle = "green";
        ctx.font = "120px Helvetica";
        ctx.fillText(
          `LEVEL CLEARED!`,
          canvas.width / 2 - 450,
          canvas.height / 3
        );
        this.showBestTime();
        stopGame();

        ctx.fillText(
          `Your time: ${(game.timer * 0.01).toFixed(1)}`,
          canvas.width / 2 - 450,
          canvas.height / 2
        );

        this.player.speed.y = -10;

        setTimeout(() => {
          mainScreen();
        }, "2000");
      } else if (this.player.position.y > canvas.height) {
        ctx.fillStyle = "red";
        ctx.font = "150px Helvetica";

        ctx.fillText(`GAME OVER`, canvas.width / 2 - 450, canvas.height / 2);
        this.showBestTime();
        setTimeout(() => {
          initLevelOne();
        }, "1000");
      }
    } else if (levelTwoActive) {
      if (this.frames > 10000) {
        this.currentTime = this.timer;
        ctx.fillStyle = "green";
        ctx.font = "120px Helvetica";
        ctx.fillText(
          `LEVEL CLEARED!`,
          canvas.width / 2 - 450,
          canvas.height / 3
        );
        this.showBestTime();
        stopGame();
        ctx.fillText(
          `Your time: ${(game.timer * 0.01).toFixed(1)}`,
          canvas.width / 2 - 450,
          canvas.height / 2
        );
        this.player.speed.y = -10;
        setTimeout(() => {
          mainScreen();
        }, "2000");
      } else if (this.player.position.y > canvas.height) {
        ctx.fillStyle = "red";
        ctx.font = "150px Helvetica";
        this.showBestTime();
        ctx.fillText(`GAME OVER`, canvas.width / 2 - 450, canvas.height / 2);

        setTimeout(() => {
          initLevelTwo();
        }, "1000");
      }
    }
  }

  init(player, obstacles) {
    //this.clear();
    //ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // background should come from eleve
    //this.level.start(this.player);
    //requestAnimationFrame(this.init);
    this.checkGameWin();
    player.update();
    playerMovement();
    this.collision(player, obstacles);
  }
}
