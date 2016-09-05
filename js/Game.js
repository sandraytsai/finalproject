var theGame = function(game){
  console.log("start game")
}

var points = 0;
var health = 10;

theGame.prototype = {
  create: function(){
    console.log(this)
    // (origin, origin, width, height)
    this.add.tileSprite(0, 0, 1920, 600, 'background');
    this.world.setBounds(0, 0, 1920, 600);

   //  platform group- includes ground and ledges
    platforms = this.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, this.world.height - 62, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)-> 1920/400 = 4.8 
    ground.scale.setTo(4.8, 2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    var ledge = platforms.create(-150, 200, 'ground');
    ledge.body.immovable = true;

    var ledge = platforms.create(700, 300, 'ground');
    ledge.body.immovable = true;

    var ledge = platforms.create(800, 500, 'ground');
    ledge.body.immovable = true;

    var ledge = platforms.create(1000, 200, 'ground');
    ledge.body.immovable = true;

    var ledge = platforms.create(1200, 400, 'ground');
    ledge.body.immovable = true;

    var ledge = platforms.create(1500, 300, 'ground');
    ledge.body.immovable = true;


    // diamonds = 'points'/ things to kill
    diamonds = this.add.group();
    diamonds.enableBody = true;
    // made global so able to kill
    diamond = diamonds.create(400, 0, 'diamond');
    diamond.body.gravity.y = 300; 
    diamond.body.bounce.y = 0.3;

    // firstaids
    firstaids = this.add.group()
    firstaids.enableBody = true;

    var firstaid = firstaids.create(800, 0, 'firstaid');
    firstaid.body.gravity.y = 300;
    firstaid.body.bounce.y = 0.3;

    // player 
    player = this.add.sprite(5, this.world.centerY, 'player');
    this.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1], 10, true);
    player.animations.add('right', [2, 3], 10, true);

    // enemy
    enemy = this.add.sprite(450, 300, 'enemy');
    this.physics.arcade.enable(enemy);
    enemy.body.velocity.x = -50
    enemy.body.bounce.y = 0.2;
    enemy.body.gravity.y = 300;
    enemy.body.collideWorldBounds = true;

    enemy.animations.add('left', [0, 1, 2, 3], 10, true);
    enemy.animations.add('right', [5, 6, 7, 8], 10, true);

    // weapon
    weapon = this.add.weapon(30, 'bullet');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletSpeed = 600;
    weapon.fireRate = 100;

    weapon.trackSprite(player, 40, 10, true);


    pointText = this.add.text(16, 16, 'Points: ' + points, { fontSize: '32px', fill: '#000' });
    pointText.fixedToCamera = true;

    healthText = this.add.text(16, 40, 'Health: ' + health, { fontSize: '32px', fill: '#000' });
    healthText.fixedToCamera = true;

    cursors = this.input.keyboard.createCursorKeys();

    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    this.camera.follow(player);

  },
  update: function(){
    this.physics.arcade.collide(player, platforms);
    this.physics.arcade.collide(enemy, platforms, this.moveEnemy);
    this.physics.arcade.collide(diamonds, platforms);
    this.physics.arcade.collide(firstaids, platforms);

    this.physics.arcade.overlap(player, diamonds, this.collectDiamonds, null, (player, diamond))
    this.physics.arcade.overlap(player, firstaids, this.collectFirstaids, null, this)
    this.physics.arcade.overlap(weapon.bullets, diamonds, this.attackDiamonds, null, this)
    this.physics.arcade.overlap(player, enemy, this.decreaseHealth);

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
      player.frame = 2;
    };

    if (fireButton.isDown) {
      weapon.fire();
    };

    if (health <= 0) {
      health = 10;
      points = 0;
      this.game.state.start("Game");
    };
  },
  collectDiamonds: function(player, diamond) {
    diamond.kill();
    points += 1; 
    pointText.text = 'Points:' + points; 
  },
  collectFirstaids: function(game){
    var block = this.add.image(700, 180, 'pinkblock');
  },
  attackDiamonds: function(weapon, diamond) {
    diamond.kill()
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
    player.x -= 300
  }
}