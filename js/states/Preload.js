var preload = function(game){
};

preload.prototype = {
  preload: function(){
    var loadingBar = this.add.sprite(400,300,"loading");
    this.load.setPreloadSprite(loadingBar);
    this.load.image('mainbg', 'assets/gamebasics/menubg.png');
    this.load.image('intro-background', 'assets/gamebasics/intro-animation.png');
    this.load.image('gameover', 'assets/gamebasics/sandra-game-over.png');
    this.load.image('start-button', 'assets/gamebasics/start-button.png');
    this.load.image('restart-button', 'assets/gamebasics/restart-button.png');
    this.load.image('ammobarbg', 'assets/gamebasics/ammobarbg.png');
    this.load.image('ammobar', 'assets/gamebasics/ammobar.png');
    this.load.image('healthbarbg', 'assets/gamebasics/healthbarbg.png');
    this.load.image('healthbar', 'assets/gamebasics/healthbar.png');

    this.load.image('bg1', 'assets/background/blueblue_bg.png');
    this.load.image('bg2', 'assets/background/pink_bg.png');
    this.load.image('bg3', 'assets/background/greengreen_bg.png')
    this.load.image('bg4', 'assets/background/orange_bg.png');
    this.load.image('bg5', 'assets/background/purple_bg.png');
    this.load.image('bg6', 'assets/background/pinkpink_bg.png');
    this.load.image('bg7', 'assets/background/green_bg.png');
    this.load.image('bg8', 'assets/background/blue_bg.png');

    this.load.image('1', 'assets/platforms/block_one.png');
    this.load.image('2', 'assets/platforms/block_two.png');
    this.load.image('3', 'assets/platforms/block_three.png');
    this.load.image('4', 'assets/platforms/block_four.png');
    this.load.image('5', 'assets/platforms/block_five.png');
    this.load.image('6', 'assets/platforms/block_six.png');
    this.load.image('7', 'assets/platforms/block_seven.png');
    this.load.image('8', 'assets/platforms/block_eight.png');

    this.load.image('ammo', 'assets/items/ammo-box.png');
    this.load.image('super-ammo', 'assets/items/super-ammo.png');
    this.load.image('bug', 'assets/baddies/bug_32x32.png');
    this.load.image('healthbox', 'assets/items/health-box.png');
    this.load.spritesheet('bullet', 'assets/player/yellow-bullet.png', 40, 18);

    this.load.spritesheet('player', 'assets/player/sandra_34x32.png', 68, 64);
    this.load.spritesheet('sinatrabaddie', 'assets/baddies/sinatra-baddie.png', 32, 42);
    this.load.spritesheet('rubybaddie', 'assets/baddies/ruby-baddie.png', 32, 41);
    this.load.spritesheet('jsbaddie', 'assets/baddies/js_baddie-32x46.png', 32, 46);
    this.load.spritesheet('boss', 'assets/baddies/boss.png', 500, 500);
    this.load.image('boss-bullet', 'assets/baddies/boss-bullet_60x27.png');
    
    this.load.audio('shoot', 'assets/audio/Strong_Punch.mp3');
    this.load.audio('jump', 'assets/audio/Mario_Jumping.mp3');
    this.load.audio('bgmusic', 'assets/audio/backgroundmusic.wav');
  },
  create: function(){
    this.game.state.start("Menu");
  }
}
