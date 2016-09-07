createEnemies= function() {
  enemies = this.add.group();
  enemies.enableBody = true;
  createEnemy.apply(this, [450, 5, 'enemy']);
  createEnemy.apply(this, [600, 5, 'enemy']);
  createEnemy.apply(this, [900, 5, 'enemy']);
  createEnemy.apply(this, [1200, 5, 'enemy']);
  createEnemy.apply(this, [1400, 5, 'enemy']);
  createEnemy.apply(this, [1600, 5, 'enemy']);
}

createEnemy= function(x, y, enemy) {
  var enemy = this.add.sprite(x, y, enemy);
  enemies.add(enemy);
  enemy.body.velocity.x = -50;
  enemy.body.bounce.y = 0.2;
  enemy.body.gravity.y = 300;
  enemy.body.collideWorldBounds = true;

  enemy.animations.add('left', [0, 1, 2, 3], 10, true);
  enemy.animations.add('right', [5, 6, 7, 8], 10, true);
}
