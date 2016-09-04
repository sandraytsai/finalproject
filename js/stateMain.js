var StateMain = {

  preload: function() {
    // load images into library

    game.scale.forceOrientation(true, false);
  },



  create: function() {
    // setup objects, variables, sounds, text, sprites, explosions, etc.

    this.setListeners();
  },

  // putting listeners on a seperate function, it helps to keep the listeners
    // on the same place so it's easier to find.
  setListeners: function() {
    game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
    game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
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
