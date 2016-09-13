createEnemies = function() {
  enemies = this.add.group();
  enemies.enableBody = true;
  // w1
  createEnemy.apply(this, [470, 5, 'rubybaddie']);
  createEnemy.apply(this, [600, 5, 'rubybaddie']);
  createEnemy.apply(this, [1050, 200, 'sinatrabaddie']);
  createEnemy.apply(this, [1230, 400, 'sinatrabaddie']);
  createEnemy.apply(this, [1700, 5, 'jsbaddie']);
}

createEnemy = function(x, y, type) {
  enemy = this.add.sprite(x, y, type);
  enemies.add(enemy);
  enemy.body.velocity.x = -50;
  enemy.body.bounce.y = 0.2;
  enemy.body.gravity.y = 300;
  enemy.body.collideWorldBounds = true;

  enemy.animations.add('left', [0, 1], 4, true);
  enemy.animations.add('right', [2, 3], 4 , true);

  if (type == 'rubybaddie') {
    enemy.health = 1;
  } else if (type == 'sinatrabaddie') {
    enemy.health = 2;
  } else if (type == 'jsbaddie') {
    enemy.health = 3;
    enemy.animations.add('left', [0, 1], 2, true);
    enemy.animations.add('right', [2, 3], 2 , true);
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
  enemyweapon.bulletAngleVariance = 100;
}


createObstacle = function() {
  obstacle = this.add.weapon(20, 'bug');
  obstacle.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle.x = 600;
  obstacle.y = 600;
  obstacle.autofire = true;
  obstacle.fireRate = 2000; 
  obstacle.bulletAngleOffset = 90;  
}