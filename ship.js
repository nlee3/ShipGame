//var spr_ship = new Image(); spr_ship.src="filepath";    eg. "filepath"="Images/shipSprite.png"
// Populate a global variable for the ship
var spr_ship=new Image(); spr_ship.src="output.png";

function InitializeShip() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  ship = {
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
        x : ship.x,
        y : ship.y,
    },
    scale : 50,
    initialized : true,
    bullets : []
  };
}

  function RenderShip(context) {
    /*if (!ship.initialized) {
      return;
    }
context.beginPath()
context.moveTo(ship.x-80,ship.y-50);
context.lineTo(ship.x+80,ship.y-50);
context.lineTo(ship.x+50,ship.y+50);
context.lineTo(ship.x-50,ship.y+50);
context.closePath();
context.stroke();
context.fillStyle="yellow";
context.fill();*/
context.drawImage(spr_ship, ship.x, ship.y, 100, 100);

}
