var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -1;
  //movingRect.debug = true;
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.y = movingRect.y;
  gameObject1.velocityX = 1;
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject4 = createSprite(400, 100, 50, 50);
  
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";
  


}

function draw() {
  background(0,0,0);  


  if(isTouching(movingRect, gameObject1))
  {
    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";

  }
  else
  {
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  if(isTouching(movingRect, gameObject2))
  {
    gameObject2.shapeColor = "blue";
    movingRect.shapeColor = "blue";

  }
  else
  {
    gameObject2.shapeColor = "Red";
    movingRect.shapeColor = "Red";

  }
  bounceoff(movingRect,gameObject1);
  drawSprites();
}

