var GAME = {
  canvas : {
    width : 540,
    height : 720
  },
  started : true,
  level : 1,
  iceburg : [],
};

var ship = {
  initialized : false,
  bullets : [],
  latest : {
    x : 0,
    y : 0
  }
};

var NEW_OBJECT = {
  x : 0,
  y : 0
};
