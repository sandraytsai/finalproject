var preload = function(game){
};

preload.prototype = {
  preload: function(){
    var loadingBar = this.add.sprite(160,240,"loading");
    loadingBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(loadingBar);
    this.load.image('background','assets/b_12800x600.jpeg');

    this.load.image('1', 'assets/platforms/block_one.png');
    this.load.image('2', 'assets/platforms/block_two.png');
    this.load.image('3', 'assets/platforms/block_three.png');
    this.load.image('4', 'assets/platforms/block_four.png');
    this.load.image('5', 'assets/platforms/block_five.png');
    this.load.image('6', 'assets/platforms/block_six.png');
    this.load.image('7', 'assets/platforms/block_seven.png');
    this.load.image('8', 'assets/platforms/block_eight.png');

    this.load.image('redhealth', 'assets/red-25-100.png');
    this.load.image('greenhealth', 'assets/green-25-100.png');

    this.load.image('ground', 'assets/platform.png');
    this.load.image('200x400', 'assets/p200x400.png');
    this.load.image('50x200', 'assets/p50x200.png');
    this.load.image('50x300', 'assets/p50x300.png');
    this.load.image('600x50', 'assets/p600x50.png');
    this.load.image('700x200', 'assets/p700x200.png');
    this.load.image('pinkblock', 'assets/pinkblock.jpg');
    this.load.image('diamond', 'assets/diamond.png');
    this.load.image('bullet', 'assets/star.png');
    this.load.image('firstaid', 'assets/firstaid.png');
    this.load.spritesheet('player', 'assets/megaman2_14f.png', 35, 32);
    this.load.spritesheet('enemy1', 'assets/dude.png', 32, 48);
    this.load.spritesheet('enemy2', 'assets/player.png', 32, 32);
    this.load.audio('shoot', 'assets/audio/Strong_Punch.mp3');
    this.load.audio('jump', 'assets/audio/Mario_Jumping.mp3');
    this.load.audio('bgmusic', 'assets/audio/backgroundmusic.wav');
  },
  create: function(){
    this.game.state.start("Menu");
  }
}
