var StateMain = {

  preload: function() {
    // load images into library
    // game.scale.forceOrientation(landscape, portrait);

    game.load.spritesheet("megaman", "assets/megaman.png", 50, 50, 136);
  },



  create: function() {
    // setup objects, variables, sounds, text, sprites, explosions, etc.
    console.log("[Ready!] `create: fn`");

    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.megaman = game.add.sprite(150, 150, "megaman");

    this.megaman.animations.add('instantiate',
      [0,1,2,3,4,5,6,7,8,9,10,11,12,13], 4, false);
    this.megaman.animations.add('idle',
      [6,7,8,9,10,11,12,13], 4, true);
    this.megaman.animations.add('run',
      [33,34,35,36,37], 4, true);

    this.megaman.animations.play('idle');
    this.megaman.anchor.set(0.5,0.5);
    game.physics.arcade.enable(this.megaman);
    this.megaman.body.gravity.y = 100;
    this.megaman.body.bounce.set(0.25);
    this.megaman.body.colliderWorldBound = true;

  },



  update: function() {
    // game loop that constantly runs.


  }
}
