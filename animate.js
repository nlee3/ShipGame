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
    SHIP.speed = 0;
  }
  /**
  Speed up while key is pressed to limit of 50
  **/
  if (CONTROLS.ship.left) {
    SHIP.x -=5;
  }
  
  if (CONTROLS.ship.right) {
    SHIP.x +=5;
  }
  if (CONTROLS.ship.forward) {
    if(SHIP.speed<50){
      SHIP.speed++;
    }
  }
  if (CONTROLS.ship.backward) {
    if(SHIP.speed<50){
      SHIP.speed--;
    }
  }
  /*
  Move ship based on speed
  */


  // Check if asteroid is leaving the boundary, if so, switch sides
  if (SHIP.x > GAME.canvas.width) {
    SHIP.x = 0;
  } else if (SHIP.x < 0) {
    SHIP.x = 600;
  } else if (SHIP.y > GAME.canvas.height) {
    SHIP.y = 0;
  } else if (SHIP.y < 0) {
    SHIP.y = 300;
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
    handleIceburgAnimation();
    renderIceburg();
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
