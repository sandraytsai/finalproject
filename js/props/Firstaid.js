createFirstaids= function() {
  firstaids = this.add.group();
  firstaids.enableBody = true;
  createFirstaid(1150, 0);
};

createFirstaid= function(x,y) {
  var firstaid = firstaids.create(x, y, 'firstaid');
  firstaid.body.gravity.y = 300;
  firstaid.body.bounce.y = 0.3;
};