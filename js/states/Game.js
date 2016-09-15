var theGame = function(game){
};

var health = 1000;
var bullets = 10;

theGame.prototype = {
  create: function(){
    createBackground.apply(this);

    this.world.setBounds(0, 0, 12800, 600);

    addAudio.apply(this);

    player = this.add.sprite(5, 5, 'player');
    player.scale.setTo(0.70, 0.70);
    this.physics.arcade.enable(player);
    createPlayer.apply(this);

    createGates.apply(this);
    createKeys.apply(this);
    createObstacles.apply(this);
    createPlatforms.apply(this);
    createGrounds.apply(this);
    createAmmos.apply(this);
    createFirstaids.apply(this)
    createEnemies.apply(this);
    createBoss.apply(this)

    createEnemyWeapon.apply(this);
    createWeapon.apply(this);
    playerStatus.apply(this, [health, bullets]);

    cursors = this.input.keyboard.createCursorKeys();
    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
  },
  
  update: function(){
    this.physics.arcade.collide(player, platforms);
    this.physics.arcade.collide(player, gates);
    this.physics.arcade.collide(boss, platforms);
    this.physics.arcade.collide(enemies, platforms, this.moveEnemy);
    this.physics.arcade.collide(ammos, platforms);
    this.physics.arcade.collide(keys, platforms);
    this.physics.arcade.collide(firstaids, platforms);
    this.physics.arcade.collide(weapon.bullets, platforms, this.killBullet);
    this.physics.arcade.collide(enemyweapon.bullets, platforms, this.killEnemyBullet);

    this.physics.arcade.overlap(player, ammos, this.collectAmmos, null, this)
    this.physics.arcade.overlap(player, firstaids, this.collectFirstaids, null, this)
    this.physics.arcade.overlap(weapon.bullets, enemies, this.attackEnemy, null, this)
    this.physics.arcade.overlap(weapon.bullets, boss, this.attackBoss, null, this)
    this.physics.arcade.overlap(player, enemies, this.hitByEnemy);
    this.physics.arcade.overlap(player, boss, this.touchBoss);
    this.physics.arcade.overlap(player, obstacle1.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, obstacle2.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, obstacle3.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, obstacle4.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, obstacle5.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, obstacle6.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, obstacle7.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, obstacle8.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, obstacle9.bullets, this.hitByObstacle);
    this.physics.arcade.overlap(player, obstacle10.bullets, this.hitByObstacle);

    this.physics.arcade.overlap(player, keys, this.opengate, null, this);

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
    if (bullets + ammo.amount <= 10 ) {
      weapon.resetShots(ammo.amount + bullets);
      bullets += ammo.amount;
    } else {
      weapon.resetShots(10);
      bullets = 10;
    }

  },
  collectFirstaids: function(player, firstaid){
    firstaid.kill();
    if (health > 800) {
      health = 1000;
    } else {
      health += 200;
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
    health -= 5;
  },
  touchBoss: function() {
    health -= 2;
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
  },
  opengate: function(player, key) {
    key.kill();
    if ( player.x <= 1600) {
      gate1.body.velocity.y = -50
    } else if ( player.x <= 3200 ) {
      gate2.body.velocity.y = -50
    } else if ( player.x <= 4800) {
      gate3.body.velocity.y = -50
    } else if ( player.x <= 6400) {
      gate4.body.velocity.y = -50
    } else if ( player.x <= 8000) {
      gate5.body.velocity.y = -50
    } else if ( player.x <= 9600) {
      gate6.body.velocity.y = -50
    } else if ( player.x <= 11200) {
      gate7.body.velocity.y = -50
    } else if ( player.x <= 12800) {
      gate8.body.velocity.y = -50
    };
  }
}
