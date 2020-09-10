var wall,thickness;
var bullet,speed,weight;

function setup(){
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="white";
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="white";
  bullet.velocityX=speed;
}
function draw() {
  background(0);
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);

    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
    }
  }  isTouching();
  hasCollided();
  drawSprites();
}

function isTouching()
{
  if (bullet.x-wall.x<wall.width/2+bullet.width/2
    && wall.x-bullet.x<bullet.width/2+wall.width/2
    && bullet.y-wall.y<wall.height/2+bullet.height/2
    && wall.y-bullet.y<bullet.height/2+wall.height/2){

    }
  } 
  function hasCollided(lbullet,lwall)
  {
    bulletRightEdge=lbullet.x + lbullet.width;

    wallLeftEdge=lwall.x;

    if(bulletRightEdge>=wallLeftEdge) 
    {
      return true;

      
    }
    return false;
  }
