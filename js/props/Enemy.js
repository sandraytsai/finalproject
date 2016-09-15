createEnemies = function() {
  enemies = this.add.group();
  enemies.enableBody = true;
  // w1
  createEnemy.apply(this, [405, 400, 'rubybaddie']);
  createEnemy.apply(this, [535, 350, 'rubybaddie']);
  createEnemy.apply(this, [1100, 300, 'rubybaddie']);
  createEnemy.apply(this, [1260, 400, 'rubybaddie']);
  createEnemy.apply(this, [1700, 5, 'rubybaddie']);
  // w2
  createEnemy.apply(this, [2150, 200, 'rubybaddie']);
  createEnemy.apply(this, [2450, 400, 'rubybaddie']);
  createEnemy.apply(this, [2850, 500, 'rubybaddie']);
  // w3
  createEnemy.apply(this, [3310, 450, 'rubybaddie']);
  createEnemy.apply(this, [3650, 300, 'rubybaddie']);
  createEnemy.apply(this, [3960, 150, 'rubybaddie']);
  createEnemy.apply(this, [4550, 400, 'rubybaddie']);
  // w4
  createEnemy.apply(this, [5000, 300, 'sinatrabaddie']);
  createEnemy.apply(this, [5200, 300, 'sinatrabaddie']);
  createEnemy.apply(this, [5600, 250, 'sinatrabaddie']);
  createEnemy.apply(this, [6250, 350, 'sinatrabaddie']);
  createEnemy.apply(this, [6300, 200, 'sinatrabaddie']);
  // w5
  createEnemy.apply(this, [6600, 200, 'rubybaddie']);
  createEnemy.apply(this, [6800, 200, 'sinatrabaddie']);
  createEnemy.apply(this, [7000, 200, 'rubybaddie']);
  createEnemy.apply(this, [6610, 450, 'sinatrabaddie']);
  // createEnemy.apply(this, [6860, 450, 'rubybaddie']);
  createEnemy.apply(this, [7040, 450, 'sinatrabaddie']);
  createEnemy.apply(this, [7350, 350, 'rubybaddie']);
  createEnemy.apply(this, [7500, 350, 'sinatrabaddie']);
  // createEnemy.apply(this, [7650, 350, 'rubybaddie']);
  createEnemy.apply(this, [7800, 350, 'sinatrabaddie']);
  // w6
  createEnemy.apply(this, [8260, 350, 'jsbaddie']);
  createEnemy.apply(this, [8480, 200, 'jsbaddie']);
  createEnemy.apply(this, [8680, 200, 'jsbaddie']);
  createEnemy.apply(this, [9210, 350, 'jsbaddie']);
  createEnemy.apply(this, [9360, 100, 'jsbaddie']);
  // w7
  createEnemy.apply(this, [9870, 300, 'jsbaddie']);
  createEnemy.apply(this, [10100, 400, 'jsbaddie']);
  createEnemy.apply(this, [10310, 500, 'jsbaddie']);
  createEnemy.apply(this, [10660, 450, 'jsbaddie']);
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
  enemyweapon = this.add.weapon(10, 'boss-bullet');
  enemyweapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
  enemyweapon.bulletKillDistance = 800;
  enemyweapon.trackSprite(boss, 210, 330, true);
  enemyweapon.fireRate = 500;
  enemyweapon.autofire = true;
  enemyweapon.bulletSpeed = -300;
  enemyweapon.fireAngle = 300;
  enemyweapon.bulletAngleVariance = 70;
}

createObstacles = function() {
  // w1
  obstacle1 = this.add.weapon(5, 'bug');
  obstacle1.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle1.x = 600;
  obstacle1.y = 600;
  obstacle1.autofire = true;
  obstacle1.fireRate = 1500; 
  obstacle1.bulletAngleOffset = 90;  
  // w2
  obstacle2 = this.add.weapon(5, 'bug');
  obstacle2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle2.x = 1945;
  obstacle2.y = 600;
  obstacle2.autofire = true;
  obstacle2.fireRate = 1500; 
  obstacle2.bulletAngleOffset = 90; 
  obstacle3 = this.add.weapon(5, 'bug');
  obstacle3.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle3.x = 2500;
  obstacle3.y = 600;
  obstacle3.autofire = true;
  obstacle3.fireRate = 1500; 
  obstacle3.bulletAngleOffset = 90;   
  // w3
  obstacle4 = this.add.weapon(5, 'bug');
  obstacle4.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle4.x = 4035;
  obstacle4.y = 600;
  obstacle4.autofire = true;
  obstacle4.fireRate = 1500; 
  obstacle4.bulletAngleOffset = 90;  
  // w4
  obstacle5 = this.add.weapon(5, 'bug');
  obstacle5.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle5.x = 5335;
  obstacle5.y = 600;
  obstacle5.autofire = true;
  obstacle5.fireRate = 1500; 
  obstacle5.bulletAngleOffset = 90;  
  obstacle6 = this.add.weapon(5, 'bug');
  obstacle6.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle6.x = 6035;
  obstacle6.y = 600;
  obstacle6.autofire = true;
  obstacle6.fireRate = 1500; 
  obstacle6.bulletAngleOffset = 90;  
  // w5
  obstacle7 = this.add.weapon(5, 'bug');
  obstacle7.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle7.x = 7135;
  obstacle7.y = 600;
  obstacle7.autofire = true;
  obstacle7.fireRate = 1500; 
  obstacle7.bulletAngleOffset = 90;  
  // w6
  obstacle8 = this.add.weapon(5, 'bug');
  obstacle8.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle8.x = 8980;
  obstacle8.y = 600;
  obstacle8.autofire = true;
  obstacle8.fireRate = 1500; 
  obstacle8.bulletAngleOffset = 90;  
  // w7
  obstacle9 = this.add.weapon(5, 'bug');
  obstacle9.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle9.x = 9935;
  obstacle9.y = 600;
  obstacle9.autofire = true;
  obstacle9.fireRate = 1500; 
  obstacle9.bulletAngleOffset = 90;  
  obstacle10 = this.add.weapon(5, 'bug');
  obstacle10.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle10.x = 10445;
  obstacle10.y = 600;
  obstacle10.autofire = true;
  obstacle10.fireRate = 1500; 
  obstacle10.bulletAngleOffset = 90;  
}

createObstacle = function(x, y) {
  obstacle = this.add.weapon(5, 'bug');
  obstacle.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  obstacle.x = x;
  obstacle.y = y;
  obstacle.autofire = true;
  obstacle.fireRate = 1500; 
  obstacle.bulletAngleOffset = 90;  
}