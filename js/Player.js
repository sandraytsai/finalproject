createPlayer= function(player) {
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  player.animations.add('left', [0, 1], 10, true);
  player.animations.add('right', [2, 3], 10, true);
}