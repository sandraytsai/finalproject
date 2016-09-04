var StateMain = {

  preload: function() {
    // load images into library
    // forceOrientation takes true or false values for arguments.
    game.scale.forceOrientation(landscape, portait);
  },



  create: function() {
    // setup objects, variables, sounds, text, sprites, explosions, etc.
    console.log("[Ready!] `create: fn`");
    this.setListeners();
  },

  // putting listeners on a seperate function, it helps to keep the listeners
    // on the same place so it's easier to find.
  setListeners: function(){
    game.scale.enterIncorrectOrientation.add(function, scope);
    game.scale.leaveIncorrectOrientation.add(function, scope);
  }



  update: function() {
    // game loop that constantly runs.


  }

}
