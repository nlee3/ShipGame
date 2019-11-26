function Iceburg (x,y)
{
  this.x = x;
  this.y = y;
}

function addIceburg (x,y)
{
  GAME.iceburg.push(new Iceburg(x,y));
}

function renderIceburg(context)
{
  for(var k = 0; k<GAME.iceburg.length; k++)
  {
    context.arc(GAME.iceburg[k].x,GAME.iceburg[k].y,30+(Math.random()*40),0,2*Math.PI);
  }
}

var iceburgTimer = 50;

function handleIceburgAnimation()
{
  iceburgTimer--;
  if(iceburgTimer==0)
  {
    iceburgTimer = 50;
    addIceburg(Math.random()*(GAME.canvas.width),-20);
  }
}

function InitializeIceburg()
{
  var canvas = document.getElementById('mainCanvas');
  var contxt = canvas.getContext('2d');
  for (var k = 0; k<GAME.iceburg.length; k++)
  {
    GAME.iceburg.splice(k,1);
    k--;
  }
}
