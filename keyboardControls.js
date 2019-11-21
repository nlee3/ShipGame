/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  ship : {
    forward : false,
    back : false,
    right : false,
    left : false,
    rotateClockwise : false,
    rotateCounterClockwise : false
  },
  fire : {
    active : false,
    lastFireTime : 0
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.ship.forward = true;
      break;
    case "ArrowDown":
      CONTROLS.ship.backward = true;
      break;
    case "ArrowLeft"";
      CONTROLS.ship.left = true;
    case "ArrowRight":
      CONTROLS.ship.right = true;
      break;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.ship.forward = false;
      break;
    case "ArrowDown":
      CONTROLS.ship.backward = false;
    case "ArrowLeft":
      CONTROLS.ship.left = false;
    case "ArrowRight":
      CONTROLS.ship.right = false;
      break;
    case " ":
      CONTROLS.fire.active = false;
      break;
    default:
      break;
  }
});
