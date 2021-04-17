function isTouching(object1, object2)
{
 
  if (object1.x - object2.x <= object2.width/2 + object1.width/2
    && object2.x - object1.x <= object2.width/2 + object1.width/2
    && object1.y - object2.y <= object2.height/2 + object1.height/2
    && object2.y - object1.y <= object2.height/2 + object1.height/2) 
  {
     return true;
  }
  else 
  {
    return false;
  }
 

}
function bounceoff(block1,block2) {
  if (block1.x - block2.x <= block1.width/2+ block2.width/2
    && block2.x - block1.x <= block1.width/2+ block2.width/2
    
    )
  {
    block1.velocityX = block1.velocityX*-1
    block2.velocityX = block2.velocityX*-1
  }
  if (block1.y - block2.y <= block1.height/2+ block2.height/2
    && block2.y - block1.y <= block1.height/2+ block2.height/2
    
    )
  {
    block1.velocityY = block1.velocityY*-1
    block2.velocityY = block2.velocityY*-1
  }
}