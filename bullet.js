/**

Sorry computer broke so this stuff isn't functional yet since I only had 1 day

Supposed to add bullet to bullets array at player coordinate

var index;

function bullet(x, y) {
  this.x = x;
  this.y = y;
  this.update = function(){
    context.fillRect(this.x, this.y, 10, 10);
  }
}

function addBullet(){
  SPACE_SHIP.bullets[index] = bullet(SPACE_SHIP.x,SPACE_SHIP.y)

}

**/
