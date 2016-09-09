var theGame = function(game){
};

var points = 0;
var health = 1000;
var bullets = 5;

theGame.prototype = {
  create: function(){
    this.add.tileSprite(0, 0, 12800, 600, 'background');
    this.world.setBounds(0, 0, 12800, 600);

    addAudio.apply(this);

    player = this.add.sprite(5, 5, 'player');
    this.physics.arcade.enable(player);
    createPlayer.apply(this);

    createPlatforms.apply(this);

    createGrounds.apply(this);

    createDiamonds.apply(this);

    createFirstaids.apply(this);

    createEnemies.apply(this);

    createWeapon.apply(this);

    createText.apply(this, [points])

    playerStatus.apply(this, [health, bullets]);

    cursors = this.input.keyboard.createCursorKeys();
    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

  },
  
  update: function(){
    this.physics.arcade.collide(player, platforms);
    this.physics.arcade.collide(enemies, platforms, this.moveEnemy);
    this.physics.arcade.collide(diamonds, platforms);
    this.physics.arcade.collide(firstaids, platforms);
    this.physics.arcade.collide(weapon.bullets, platforms, this.killBullet);

    this.physics.arcade.overlap(player, diamonds, this.collectDiamonds, null, this)
    this.physics.arcade.overlap(player, firstaids, this.collectFirstaids, null, this)
    this.physics.arcade.overlap(weapon.bullets, enemies, this.attackEnemy, null, this)
    this.physics.arcade.overlap(player, enemies, this.decreaseHealth);

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
  collectDiamonds: function(player, diamond) {
    diamond.kill();
    points += 1;
    weapon.resetShots();
    bullets = 5;
    pointText.text = 'Points: ' + points;
  },
  collectFirstaids: function(player, firstaid){
    var block = this.add.image(firstaid.x, firstaid.y - firstaid.height - 60, 'pinkblock');
    firstaid.kill();
    if (health > 900) {
      health = 1000
    } else {
      health += 100;
    }
  },
  attackEnemy: function(weapon, enemy) {
    enemy.health -= 1;
    weapon.kill();  
    if (enemy.health == 0) {
      enemy.kill();
    } 
  },
  moveEnemy: function(enemy, platform) {
    if (enemy.body.velocity.x > 0 && enemy.x > (platform.x+platform.width-enemy.width-2) || enemy.body.velocity.x < 0 && enemy.x < platform.x+2) {
      enemy.body.velocity.x *= -1
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
  decreaseHealth: function(player, enemy) {
    health -= 2;
  },
  restartGame: function() {
    health = 1000;
    points = 0;
    bullets = 5
    this.state.start("Game");
  }
}
