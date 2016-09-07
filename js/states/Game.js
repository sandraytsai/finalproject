var theGame = function(game){
  console.log("start game")
}

var points = 0;
var health = 10;
var bullets = 5;

theGame.prototype = {
  create: function(){
    console.log(this)
    // (origin, origin, width, height)
    this.add.tileSprite(0, 0, 12800, 600, 'background');
    this.world.setBounds(0, 0, 12800, 600);

   //  platform group- includes ground and ledges
    platforms = this.add.group();
    platforms.enableBody = true;
    createPlatforms();

    var ground = platforms.create(0, this.world.height - 62, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)-> 1920/400 = 4.8
    ground.scale.setTo(32, 2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // diamonds = 'points' to collect
    diamonds = this.add.group();
    diamonds.enableBody = true;
    createDiamonds();

    // firstaids
    firstaids = this.add.group();
    firstaids.enableBody = true;
    createFirstaids();

    // player
    player = this.add.sprite(5, 5, 'player');
    this.physics.arcade.enable(player);
    createPlayer(player);

    // enemies
    enemies = this.add.group();
    enemies.enableBody = true;
    var createEnemies = window.createEnemies.bind(this);
    createEnemies();

    // weapon
    weapon = this.add.weapon(10, 'bullet');
    createWeapon();

    pointText = this.add.text(15, 15, 'Points: ' + points, { fontSize: '32px', fill: '#000' });
    pointText.fixedToCamera = true;

    healthText = this.add.text(15, 40, 'Health: ' + health, { fontSize: '32px', fill: '#000' });
    healthText.fixedToCamera = true;

    bulletText = this.add.text(15, 65, 'Bullets: ' + bullets, { fontSize: '32px', fill: '#000' });
    bulletText.fixedToCamera = true;

    cursors = this.input.keyboard.createCursorKeys();

    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    this.camera.follow(player);

  },
  
  update: function(){
    this.physics.arcade.collide(player, platforms);
    this.physics.arcade.collide(enemies, platforms, this.moveEnemy);
    this.physics.arcade.collide(diamonds, platforms);
    this.physics.arcade.collide(firstaids, platforms);

    this.physics.arcade.overlap(player, diamonds, this.collectDiamonds, null, this)
    this.physics.arcade.overlap(player, firstaids, this.collectFirstaids, null, this)
    this.physics.arcade.overlap(weapon.bullets, enemies, this.attackEnemy, null, this)
    this.physics.arcade.overlap(player, enemies, this.decreaseHealth);

    player.body.velocity.x = 0;

    if (cursors.up.isDown && player.body.touching.down) {
      player.body.velocity.y = -300;
    };

    if (cursors.left.isDown) {
      player.body.velocity.x = -200;
      player.animations.play('left');
    } else if (cursors.right.isDown) {
      player.body.velocity.x = 200;
      player.animations.play('right');
    } else {
      player.animations.stop();
      player.frame = 0;
    };

    if (health <= 0) {
      this.add.image(player.x-200, 400, 'pinkblock');
      this.add.button(player.x-150, 400,"bullet", this.restartGame,this);
      player.kill();
    };

    playerFalls();
    weaponFire();
    weaponDirection();

  },
  collectDiamonds: function(player, diamond) {
    diamond.kill();
    points += 1;
    pointText.text = 'Points:' + points;
  },
  collectFirstaids: function(player, firstaid){
    var block = this.add.image(firstaid.x, firstaid.y - firstaid.height - 60, 'pinkblock');
    firstaid.kill();
    weapon.resetShots();
    bullets = 5;
    bulletText.text = 'Bullets:' + bullets;
  },
  attackEnemy: function(weapon, enemy) {
    enemy.kill();
    weapon.kill();  
  },
  moveEnemy: function(enemy, platform) {
    if (enemy.body.velocity.x > 0 && enemy.x > (platform.x+platform.width-enemy.width) || enemy.body.velocity.x < 0 && enemy.x < platform.x) {
      enemy.body.velocity.x *= -1
    };
    if (enemy.body.velocity.x > 0) {
      enemy.animations.play('right');
    } else {
      enemy.animations.play('left');
    };
  },
  decreaseHealth: function(player, enemy) {
    health -= 2;
    healthText.text = 'Health:' + health;
    player.y = 0
  },
  restartGame: function() {
    health = 10;
    points = 0;
    this.state.start("Game");
  }
}
