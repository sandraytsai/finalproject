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

playerFalls = function() {
  if (player.body.onFloor()) {
    health -= 1;
    healthText.text = 'Health:' + health;
    restartWeek(player); 
  };
}

restartWeek= function(player) {
  if ( player.x <= 1600) {
    player.x = 5;
    player.y = 0;
  } else if ( player.x <= 3200 ) {
    player.x = 1605;
    player.y = 0;
  } else if ( player.x <= 4800) {
    player.x = 3205;
    player.y = 0;
  } else if ( player.x <= 6400) {
    player.x = 4805;
    player.y = 0;
  } else if ( player.x <= 8000) {
    player.x = 6405;
    player.y = 0;
  } else if ( player.x <= 8800) {
    player.x = 8005;
    player.y = 0;
  } else if ( player.x <= 9600) {
    player.x = 8805;
    player.y = 0;
  } else if ( player.x <= 11200) {
    player.x = 9605;
    player.y = 0;
  } else {
    player.x = 11205;
    player.y = 0;
  };
}
