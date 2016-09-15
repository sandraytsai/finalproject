createKeys = function() {
  keys = this.add.group();
  keys.enableBody = true;
  createKey.apply(this, [920, 360]);
  createKey.apply(this, [2670, 500]);
  createKey.apply(this, [4470, 400]);
  createKey.apply(this, [5520, 250]);
  createKey.apply(this, [6460, 450]);
  createKey.apply(this, [9120, 450]);
  createKey.apply(this, [10220, 500]);
  createKey.apply(this, [12150, 500]);
};

createKey = function(x, y) {
  var key = keys.create(x, y, 'key');
  key.body.gravity.y = 300;
  key.body.bounce.y = 0.3;
}