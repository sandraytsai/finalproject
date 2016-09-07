var preload = function(game){
};

preload.prototype = {
  preload: function(){
    var loadingBar = this.add.sprite(160,240,"loading");
    loadingBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(loadingBar);
    this.load.image('background','assets/b_12800x600.jpeg');
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
    // 32 * 32 is the pixel size of one frame
    this.load.spritesheet('player', 'assets/megaman2_14f.png', 35, 32);
    this.load.spritesheet('enemy', 'assets/dude.png', 32, 48)
  },
  create: function(){
    this.game.state.start("Menu");
  }
}
