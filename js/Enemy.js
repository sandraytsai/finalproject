createEnemy= function(enemy) {
  enemies.add(enemy);
  enemy.body.velocity.x = -50;
  enemy.body.bounce.y = 0.2;
  enemy.body.gravity.y = 300;
  enemy.body.collideWorldBounds = true;

  enemy.animations.add('left', [0, 1, 2, 3], 10, true);
  enemy.animations.add('right', [5, 6, 7, 8], 10, true);
  }

