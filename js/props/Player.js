createPlayer = function() {
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  player.animations.add('left', [8,9,10,9], 6, true);
  player.animations.add('right', [3,4,5,4], 6, true);
};

playerMovement = function() {
  player.body.velocity.x = 0;

  if (cursors.up.isDown && player.body.touching.down) {
    player.body.velocity.y = -300;
    jump.play();
  };

  if (cursors.left.isDown) {
    player.body.velocity.x = -200;
    player.animations.play('left');
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 200;
    player.animations.play('right');
  } else {
    player.animations.stop();
    player.frame = 0;
  };
}

// playerFalls = function() {
//   if (player.body.onFloor()) {
//     player.y = 0;
//     health -= 1;
//     healthText.text = 'Health:' + health;
//   };
// }
