var preload = function(game){

  console.log("game preloading")
}

preload.prototype = {

  preload: function(){

    var loadingBar = this.add.sprite(160,240,"loading");
    loadingBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(loadingBar);

    this.load.image('background','assets/background.jpg');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('pinkblock', 'assets/pinkblock.jpg');
    this.load.image('diamond', 'assets/diamond.png');
    this.load.image('bullet', 'assets/star.png');
    this.load.image('firstaid', 'assets/firstaid.png');
    // Below --- 32 * 32 is the pixel size of one frame
    this.load.spritesheet('player', 'assets/megaman2_54.png', 36, 36);
  },


  create: function(){

    console.log(this)
    this.game.state.start("Menu");
  }
}
