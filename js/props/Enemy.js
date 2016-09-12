createEnemies = function() {
  enemies = this.add.group();
  enemies.enableBody = true;
  createEnemy.apply(this, [470, 5, 'enemy1']);
  createEnemy.apply(this, [600, 5, 'enemy1']);
  createEnemy.apply(this, [1000, 300, 'enemy1']);
  createEnemy.apply(this, [1230, 400, 'enemy2']);
  createEnemy.apply(this, [1700, 5, 'enemy2']);
}

createEnemy = function(x, y, type) {
  enemy = this.add.sprite(x, y, type);
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

createBoss = function() {
  boss = this.add.sprite(11500, 0, 'boss');
  boss.health = 10;
  boss.enableBody = true;
  this.physics.arcade.enable(boss);
  boss.body.bounce.setTo(1,1);
  boss.body.gravity.x = 100;
  boss.body.gravity.y = 100;
  boss.body.collideWorldBounds = true;
}

createEnemyWeapon = function() {
  enemyweapon = this.add.weapon(10, 'bullet');
  enemyweapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  enemyweapon.bulletKillDistance = 800;
  enemyweapon.trackSprite(boss, 0, 120, true);
  enemyweapon.fireRate = 250;
  enemyweapon.autofire = true;
  enemyweapon.bulletSpeed = -300;
  enemyweapon.fireAngle = 270;
  enemyweapon.bulletAngleVariance = 100
}


createObstacle = function() {
  obstacle = this.add.weapon(20, 'bullet');
  obstacle.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle.x = 610;
  obstacle.y = 600;
  obstacle.autofire = true;
  obstacle.fireRate = 700; 
  obstacle.fireAngle = 270;
}