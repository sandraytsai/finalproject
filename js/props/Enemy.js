createEnemies= function() {
  enemies = this.add.group();
  enemies.enableBody = true;
  createEnemy.apply(this, [470, 5, 'enemy1']);
  createEnemy.apply(this, [600, 5, 'enemy1']);
  createEnemy.apply(this, [1000, 300, 'enemy1']);
  createEnemy.apply(this, [1230, 400, 'enemy2']);
  createEnemy.apply(this, [1700, 5, 'enemy2']);
}

createEnemy= function(x, y, type) {
  var enemy = this.add.sprite(x, y, type);
  enemies.add(enemy);
  enemy.body.velocity.x = -50;
  enemy.body.bounce.y = 0.2;
  enemy.body.gravity.y = 300;
  enemy.body.collideWorldBounds = true;

  if (type == 'enemy1') {
    enemy.health = 1;
    enemy.animations.add('left', [0, 1, 2, 3], 10, true);
    enemy.animations.add('right', [5, 6, 7, 8], 10, true);
  } else if (type == 'enemy2') {
    enemy.health = 3;
    enemy.animations.add('left', [0, 1], 10, true);
    enemy.animations.add('right', [2, 3], 10, true);
  };

}
