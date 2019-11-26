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
    ship.speed = 0;
  }
  /**
  Speed up while key is pressed to limit of 50
  **/
  if (CONTROLS.ship.left) {
    ship.x -=5;
  }
  
  if (CONTROLS.ship.right) {
    ship.x +=5;
  }


  /*
  Move ship based on speed
  */


  // Check if asteroid is leaving the boundary, if so, switch sides
  if (ship.x > GAME.canvas.width) {
    ship.x = 0;
  }  
  if (ship.x < 0) {
    ship.x = GAME.canvas.width;
  }  
}

function RenderNewObject(context) {
  // Draw a new item here using the canvas 'context' variable
}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    handleIceburgAnimation();
    renderIceburg(context);
    //HandleNewObjectMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 540,720);

    // 3 - Draw new items
    RenderShip(context);
    //RenderNewObject(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
