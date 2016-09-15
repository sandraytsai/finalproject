createPlayer = function() {
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 1200;
  player.body.collideWorldBounds = true;

  facing = 'right';

  player.animations.add('left', [7,8,9,8], 6, true);
  player.animations.add('right', [2,3,4,3], 6, true);
  player.animations.add('jumpleft', [6], 1, true); 
  player.animations.add('jumpright', [5], 1, true); 
};

playerMovement = function() {
  player.body.velocity.x = 0;

  if (cursors.up.isDown && facing == 'left' ) {
    player.animations.play('jumpleft');
    // jump.play();
    if ( player.body.touching.down ){
      player.body.velocity.y = -500;
    };
    if (cursors.left.isDown) {
      player.body.velocity.x = -200;
    };
    if (cursors.right.isDown) {
      player.animations.play('jumpright');
      player.body.velocity.x = 200;
      facing ='right';
    }
  } else if (cursors.up.isDown && facing == 'right') {
    player.animations.play('jumpright');
    // jump.play();
    if ( player.body.touching.down ){
      player.body.velocity.y = -500;
    };
    if (cursors.right.isDown) {
      player.body.velocity.x = 200;
    };
    if (cursors.left.isDown) {
      player.animations.play('jumpleft');
      player.body.velocity.x = -200;
      facing ='left';
    }
  } else if (cursors.left.isDown) {
    player.body.velocity.x = -200;
    player.animations.play('left');
    if (facing != 'left') {
      facing = 'left';
    }
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 200;
    player.animations.play('right');
    if (facing != 'right') {
      facing = 'right';
    }
  } else {
    player.animations.stop();
    if (facing == 'left') {
      player.frame = 11;
    } else {
      player.frame = 0;
    }
  };
};

playerFalls = function() {
  if (player.body.onFloor()) {
    health -= 100;
    restartWeek(player); 
  };
}

restartWeek = function(player) {
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
    player.x = 4905;
    player.y = 0;
  } else if ( player.x <= 8000) {
    player.x = 6405;
    player.y = 200;
  } else if ( player.x <= 9600) {
    player.x = 7970;
    player.y = 350;
  } else if ( player.x <= 11200) {
    player.x = 9650;
    player.y = 0;
  } else {
    player.x = 11205;
    player.y = 320;
  };
}

gameOver = function() {
  if (health <= 0) {
    var gameoverscreen = this.add.image(0, 0, 'gameover');
    gameoverscreen.fixedToCamera = true;
    var gameoverbutton = this.add.button(250, 400,"restart-button", this.restartGame,this);
    gameoverbutton.fixedToCamera = true;
    player.kill();
  };
}

winGame = function() {
  if (player.body.x > 12730) {
    this.state.start("Ending");
    health = 1000;
    bullets = 5;
    weapon.resetShots();
    bgmusic.stop();
  };
}