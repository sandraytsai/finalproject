var theGame = function(game){
};

var points = 0;
var health = 1000;
var bullets = 5;

theGame.prototype = {
  create: function(){
    this.add.tileSprite(0, 0, 12800, 600, 'background');
    this.world.setBounds(0, 0, 12800, 600);

    shoot = this.add.audio('shoot');
    jump = this.add.audio('jump');
    bgmusic = this.add.audio('bgmusic', 0.5, true)
    bgmusic.play();

    player = this.add.sprite(5, 5, 'player');
    this.physics.arcade.enable(player);
    createPlayer.apply(this);

    createPlatforms.apply(this);

    createGround.apply(this);

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

    playerMovement();

    player.bringToTop();

    if (health <= 0) {
      var gameoverbutton = this.add.image(330, 200, 'pinkblock');
      gameoverbutton.fixedToCamera = true;
      var gameoverscreen = this.add.button(390, 250,"bullet", this.restartGame,this);
      gameoverscreen.fixedToCamera = true;
      player.kill();
    };

    playerFalls();
    weaponFire();
    weaponDirection();

    // this.input.onDown.addOnce(stopAnimation, this);
  },
  collectDiamonds: function(player, diamond) {
    diamond.kill();
    points += 1;
    bullets = 5;
    greenbullets.scale.setTo(bullets/5, 1);
    pointText.text = 'Points: ' + points;
  },
  collectFirstaids: function(player, firstaid){
    var block = this.add.image(firstaid.x, firstaid.y - firstaid.height - 60, 'pinkblock');
    firstaid.kill();
    weapon.resetShots();
    if (health > 900) {
      health = 1000
    } else {
      health += 100;
    }
    greenhealth.scale.setTo(health/1000, 1);
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
    greenhealth.scale.setTo(health/1000, 1);
  },
  restartGame: function() {
    health = 10;
    points = 0;
    this.state.start("Game");
  }
}
