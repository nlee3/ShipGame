/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
function handleShipAnimation() {
  /**
  If neither is pressed set speed to 0
  **/
  if(!(CONTROLS.ship.forward||CONTROLS.ship.backward)){
    SPACE_SHIP.speed = 0;
  }
  /**
  Speed up while key is pressed to limit of 50
  **/
  if (CONTROLS.ship.forward) {
    if(SPACE_SHIP.speed<50){
      SPACE_SHIP.speed++;
    }
  }
  if (CONTROLS.ship.backward) {
    if(SPACE_SHIP.speed<50){
      SPACE_SHIP.speed--;
    }
  }
  /*
  Move ship based on speed
  */
  SPACE_SHIP.y +=  SPACE_SHIP.speed/10;
  if (CONTROLS.ship.rotateClockwise) {
    SPACE_SHIP.rotation -= 4;
  }
  if (CONTROLS.ship.rotateCounterClockwise) {
    SPACE_SHIP.rotation += 4;
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (SPACE_SHIP.x > GAME.canvas.width) {
    SPACE_SHIP.x = 0;
  } else if (SPACE_SHIP.x < 0) {
    SPACE_SHIP.x = 600;
  } else if (SPACE_SHIP.y > GAME.canvas.height) {
    SPACE_SHIP.y = 0;
  } else if (SPACE_SHIP.y < 0) {
    SPACE_SHIP.y = 300;
  }
}

function RenderNewObject(context) {
  // Draw a new item here using the canvas 'context' variable
}

function HandleNewObjectMovement() {
  //NEW_OBJECT.x += 1;
  //NEW_OBJECT.y += 1;
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    HandleNewObjectMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 540,720);

    // 3 - Draw new items
    RenderSpaceship(context);
    RenderNewObject(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
