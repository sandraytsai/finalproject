createFirstaids= function() {
  firstaids = this.add.group();
  firstaids.enableBody = true;
  // w1
  createFirstaid(1150, 0);
};

createFirstaid= function(x,y) {
  var firstaid = firstaids.create(x, y, 'healthbox');
  firstaid.body.gravity.y = 300;
  firstaid.body.bounce.y = 0.3;
};