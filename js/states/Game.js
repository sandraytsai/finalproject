var theGame = function(game){
};

// var points = 0;
var health = 1000;
var bullets = 5;

theGame.prototype = {
  create: function(){
    this.add.tileSprite(0, 0, 12800, 600, 'background');
    this.world.setBounds(0, 0, 12800, 600);

    addAudio.apply(this);

    player = this.add.sprite(5, 5, 'player');
    player.scale.setTo(0.70,0.70);

    this.physics.arcade.enable(player);
    createPlayer.apply(this);

    createObstacle.apply(this);
    createPlatforms.apply(this);
    createGrounds.apply(this);
    createAmmos.apply(this);
    createFirstaids.apply(this)
    createEnemies.apply(this);
    createBoss.apply(this)

    createEnemyWeapon.apply(this);
    createWeapon.apply(this);
    // createText.apply(this, [points]);
    playerStatus.apply(this, [health, bullets]);

    cursors = this.input.keyboard.createCursorKeys();
    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
  },
  
  update: function(){
    this.physics.arcade.collide(player, platforms);
    this.physics.arcade.collide(boss, platforms);
    this.physics.arcade.collide(enemies, platforms, this.moveEnemy);
    this.physics.arcade.collide(ammos, platforms);
    this.physics.arcade.collide(firstaids, platforms);
    this.physics.arcade.collide(weapon.bullets, platforms, this.killBullet);
    this.physics.arcade.collide(obstacle.bullets, platforms, this.killObstacles);
    this.physics.arcade.collide(enemyweapon.bullets, platforms, this.killEnemyBullet);

    this.physics.arcade.overlap(player, ammos, this.collectAmmos, null, this)
    this.physics.arcade.overlap(player, firstaids, this.collectFirstaids, null, this)
    this.physics.arcade.overlap(weapon.bullets, enemies, this.attackEnemy, null, this)
    this.physics.arcade.overlap(weapon.bullets, boss, this.attackBoss, null, this)
    this.physics.arcade.overlap(player, enemies, this.hitByEnemy);
    this.physics.arcade.overlap(player, boss, this.touchBoss);
    this.physics.arcade.overlap(player, obstacle.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, enemyweapon.bullets, this.hitByEnemyWeapon);

    player.bringToTop();

    bulletStatus();
    healthStatus();

    playerMovement();
    playerFalls();

    weaponFire();
    weaponDirection();
    
    gameOver.apply(this);
    winGame.apply(this);
  },
  collectAmmos: function(player, ammo) {
    ammo.kill();
    // points += 1;
    weapon.resetShots(ammo.amount);
    bullets = ammo.amount;
    // pointText.text = 'Points: ' + points;
  },
  collectFirstaids: function(player, firstaid){
    var block = this.add.image(firstaid.x, firstaid.y - firstaid.height - 60, 'pinkblock');
    firstaid.kill();
    if (health > 900) {
      health = 1000;
    } else {
      health += 100;
    }
  },
  attackEnemy: function(weapon, enemy) {
    enemy.health -= 1;
    weapon.kill();  
    if (enemy.health == 0) {
      enemy.kill();
    };
  },
  attackBoss: function(boss, weapon) {
    boss.health -= 1;
    weapon.kill();
    if (boss.health == 0) {
      boss.kill();
      // enemyweapon.destroy();
      enemyweapon.autofire = false;
    };
  },
  moveEnemy: function(enemy, platform) {
    if (enemy.body.velocity.x > 0 && enemy.x > (platform.x+platform.width-enemy.width-2) || enemy.body.velocity.x < 0 && enemy.x < platform.x+2) {
      enemy.body.velocity.x *= -1;
    };

    if (enemy.body.velocity.x > 0) {
      enemy.animations.play('right');
    } else {
      enemy.animations.play('left');
    };
  },
  killBullet: function(weapon, platform) {
    weapon.kill();
  },
  killEnemyBullet: function(enemyweapon, platform){
    enemyweapon.kill();
  },
  hitByEnemy: function(player, enemy) {
    health -= 2;
  },
  hitByObstacle: function(player, obstacle) {
    obstacle.kill();
    health -= 50;
  },
  touchBoss: function() {
    health -= 2;
  },
  killObstacles: function(obstacle, platform) {
    obstacle.kill();
  },
  hitByEnemyWeapon: function(player, enemyweapon) {
    enemyweapon.kill();
    health -=30;
  },
  restartGame: function() {
    health = 1000;
    points = 0;
    bullets = 5;
    weapon.resetShots();
    this.state.start("Game");
  }
}
