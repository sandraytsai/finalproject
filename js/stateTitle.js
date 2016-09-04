var stateTitle = {

  preload: function() {
    // load images into library
    game.load.image("sky-background", "assets/background.jpg");
    if (screen.width < 1500) {
      game.scale.forceOrientation(true, false);
    }
  },



  create: function() {
    // setup objects, variables, sounds, text, sprites, explosions, etc.
    this.background = game.add.sprite(game.world.centerX, "sky-background");
    this.background.anchor.set(0.5, 0.5);

    this.setListeners();
  },

  setListeners: function() {
    if (screen.width < 1500) {
      game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
      game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
    }
  },

  wrongWay: function() {
    document.getElementById("wrongWay").style.display="block";
  },

  rightWay: function() {
    document.getElementById("wrongWay").style.display="none";
  },


  update: function() {
    // game loop that constantly runs.


  }

}
