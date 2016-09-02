var theGame1 = function(game){
  console.log("start game")
}

var player;
var cursors;
var diamonds;
var skillpoints = 0;
var skillText; 
var diamond;
var block;
var weapon;
var firstaid; 

theGame1.prototype = {
  create: function(){
    console.log(this)
    this.add.tileSprite(0, 0, 1920, 1920, 'background');
    this.world.setBounds(0, 0, 1920, 500);
    this.physics.startSystem(Phaser.Physics.ARCADE);
   //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.add.group();
    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;
    // Here we create the ground.
    var ground = platforms.create(0, this.world.height - 62, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(4.8, 2);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;
    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 200, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(700, 300, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(1200, 600, 'ground');
    ledge.body.immovable = true;

    // diamonds = 'skills'
    diamonds = this.add.group();
    diamonds.enableBody = true;

    var diamond = diamonds.create(400, 0, 'diamond');
    diamond.body.gravity.y = 300; 
    diamond.body.bounce.y = 0.3;

    // firstaid = 'people'
    firstaids = this.add.group()
    firstaids.enableBody = true;

    var firstaid = firstaids.create(700, 0, 'firstaid');
    firstaid.body.gravity.y = 300;
    firstaid.body.bounce.y = 0.3;

    player = this.add.sprite(5, this.world.centerY, 'player');

    this.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1], 10, true);
    player.animations.add('right', [2, 3], 10, true);


    weapon = this.add.weapon(30, 'bullet');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletSpeed = 600;
    weapon.fireRate = 100;

    weapon.trackSprite(player, 0, 0, true);


    skillText = this.add.text(16, 16, 'Skills: 0', { fontSize: '32px', fill: '#000' });
    skillText.fixedToCamera = true;

    cursors = this.input.keyboard.createCursorKeys();

    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    this.camera.follow(player);

  },
  update: function(){
    this.physics.arcade.collide(player, platforms);
    this.physics.arcade.collide(diamonds, platforms);
    this.physics.arcade.collide(firstaids, platforms);
    this.physics.arcade.overlap(player, diamonds, this.collectDiamonds, null, (player, diamond))
    this.physics.arcade.overlap(player, firstaids, this.collectFirstaids, null, this)

    player.body.velocity.x = 0;

    if (cursors.up.isDown && player.body.touching.down)
    {
      player.body.velocity.y = -300;
    }

    if (cursors.left.isDown)
    {
      player.body.velocity.x = -200;
      player.animations.play('left');

    }
    else if (cursors.right.isDown)
    {
      player.body.velocity.x = 200;
      player.animations.play('right');
    }
    else
    {
        //  Stand still
      player.animations.stop();
      player.frame = 2;
    }

    if (fireButton.isDown)
    {
      weapon.fire();
    }
  },
  collectDiamonds: function(player, diamond){
    diamond.kill();
    skillpoints += 1; 
    skillText.text = 'Skills:' + skillpoints; 
  },
  collectFirstaids: function(game){
    block = this.add.image(700, 180, 'pinkblock');
  }
}