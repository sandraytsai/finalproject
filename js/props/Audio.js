addAudio = function() {
  shoot = this.add.audio('shoot');
  jump = this.add.audio('jump');
  bgmusic = this.add.audio('bgmusic', 0.5, true)
  bgmusic.play();
}