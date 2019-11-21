
// Populate a global variable for the ship
function InitializeShip() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  SHIP = {
    x : 300,
    y : 150,
    rotation : 0,
    health : 3,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : -3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : -2,
       	y : -3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : SHIP.x,
        y : SHIP.y,
    },
    scale : 50,
    initialized : true,
    bullets : []
  };
}

// Rotate rotates a point around
// cx, cy   :   The central point
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation


// RotateAroundOrigin
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
function RotateAroundOrigin(x, y, angle) {
  return Rotate(0, 0, x, y, angle);
}

/**  Rendership
 *
 *  Renders all ship points after adjusting them for the rotation and position
 *    in space
 */
function RenderShip(context) {
  if (!SHIP.initialized) {
    return;
  }

  // Move to the point where drawing will start
  var rotatedPoint = RotateAroundOrigin(
    SHIP.positions[0].x,
    SHIP.positions[0].y,
    SHIP.rotation
  );
  context.moveTo(SHIP.x + rotatedPoint[0],SHIP.y +  rotatedPoint[1]);
  SHIP.latest.x = SHIP.x + rotatedPoint[0];
  SHIP.latest.y = SHIP.y + rotatedPoint[1];
  // Begin rendering the space ship points (rotating them each time)
  context.beginPath();
  for (var i = 0; i < SHIP.positions.length; i++) {
    var rotatedPoint = RotateAroundOrigin(
      SHIP.positions[i].x,
      SHIP.positions[i].y,
      SHIP.rotation
    );
    context.lineTo(
      SHIP.x + (rotatedPoint[0] * SHIP.scale),
      SHIP.y + (rotatedPoint[1] * SHIP.scale)
    );
  }
  context.lineWidth = 1;
  switch (SHIP.health) {
    case 3:
      context.strokeStyle = 'green';
      break;
    case 2:
      context.strokeStyle = 'blue';
      break;
    case 1:
      context.strokeStyle = 'orange';
      break;
    case 0:
      context.strokeStyle = 'red';
      break;
    default:
      context.strokeStyle = 'white';
      break;
  }
  context.stroke();
}
