var boot = function(game){
  console.log("%cStarting game", "color:white; background:red");
};
  
boot.prototype = {
  preload: function(){
    this.game.load.image("loading","assets/preloader-bar.png"); 
  },
  create: function(){
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.state.start("Preload");
  }
}