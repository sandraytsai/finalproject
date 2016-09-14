var preload = function(game){
};

preload.prototype = {
  preload: function(){
    var loadingBar = this.add.sprite(400,300,"loading");
    this.load.setPreloadSprite(loadingBar);
    this.load.image('mainbg','assets/menubg.png');
    this.load.image('intro-background', 'assets/intro-animation.png');
    this.load.image('gameover', 'assets/sandra-game-over.png');
    this.load.image('start-button', 'assets/start-button.png');
    this.load.image('restart-button', 'assets/restart-button.png');

    this.load.image('bg1','assets/background/lightbluewhite_bg.png');
    this.load.image('bg2','assets/background/pink_bg.png');
    this.load.image('bg3','assets/background/bkgrd2_06.png')
    this.load.image('bg4','assets/background/bkgrd2_02.png');
    this.load.image('bg5','assets/background/darkblue_bg.png');
    this.load.image('bg6','assets/background/darkpurple_bg.png');
    this.load.image('bg7','assets/background/lightblue_bg.png');
    this.load.image('bg8','assets/background/red_bg.png');


    this.load.image('1', 'assets/platforms/block_one.png');
    this.load.image('2', 'assets/platforms/block_two.png');
    this.load.image('3', 'assets/platforms/block_three.png');
    this.load.image('4', 'assets/platforms/block_four.png');
    this.load.image('5', 'assets/platforms/block_five.png');
    this.load.image('6', 'assets/platforms/block_six.png');
    this.load.image('7', 'assets/platforms/block_seven.png');
    this.load.image('8', 'assets/platforms/block_eight.png');

    this.load.image('ammobarbg', 'assets/ammobarbg.png');
    this.load.image('ammobar', 'assets/ammobar.png');
    this.load.image('healthbarbg', 'assets/healthbarbg.png');
    this.load.image('healthbar', 'assets/healthbar.png');

    this.load.image('pinkblock', 'assets/pinkblock.jpg');
    this.load.image('ammo', 'assets/items/ammo-box.png');
    this.load.image('super-ammo', 'assets/items/super-ammo.png');
    this.load.image('bug', 'assets/baddies/bug_32x32.png');
    this.load.spritesheet('bullet', 'assets/yellow-bullet.png', 40, 18);
    this.load.image('healthbox', 'assets/items/health-box.png');

    this.load.spritesheet('player', 'assets/sandra_34x32.png', 68, 64);
    this.load.spritesheet('sinatrabaddie', 'assets/baddies/sinatra-baddie.png', 32, 42);
    this.load.spritesheet('rubybaddie', 'assets/baddies/ruby-baddie.png', 32, 41);
    this.load.spritesheet('jsbaddie', 'assets/baddies/js_baddie-32x46.png', 32, 46);
    this.load.spritesheet('boss', 'assets/redball.png', 256, 256);
    
    this.load.audio('shoot', 'assets/audio/Strong_Punch.mp3');
    this.load.audio('jump', 'assets/audio/Mario_Jumping.mp3');
    this.load.audio('bgmusic', 'assets/audio/backgroundmusic.wav');
  },
  create: function(){
    this.game.state.start("Menu");
  }
}
