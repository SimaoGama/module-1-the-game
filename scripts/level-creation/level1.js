function animateLevelOne() {
  game.clear();
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  hills.draw();

  game.init(player, obstacles);

  obstacles.forEach((obstacle) => {
    obstacle.draw();
  });

  platforms.forEach((platform) => {
    platform.activate(player);
  });

  //player.update();
  playerMovement();
  //game.collision(player, components);
  floor.activate(player);

  game.timer += 1;
  requestAnimationFrame(animateLevelOne);
  displayStatusText();
}
