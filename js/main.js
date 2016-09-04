var game;

window.onload = function() {

  if (screen.width > 1500) {
    // Desktop or laptop --- note: 4th argument is div tag
    game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");

  } else {
    // Mobile device
    game = new
    Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
  }

  game.state.add("StateMain", StateMain);
  game.state.start("StateMain");
}


// "ph_game "
