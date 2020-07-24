var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 50, 50);
  rect2 = createSprite(500, 300, 50, 50);
  rect3 = createSprite(600,300,50,50)

  rect1.debug = true;
  rect2.debug = true;

  // rect1.velocityY = 5;
  // rect2.velocityX = 5;
  // rect3.velocityX =-5;
}

function draw() {
  background(255,255,255); 
  rect2.shapeColor = "blue";
  rect3.shapeColor = "red";
  // bounceOff(rect2,rect3);
  // bounceOff(rect1,rect2);
rect1.x = mouseX;
rect1.y = mouseY;
  if(isTouching(rect1,rect2)){
    rect1.shapeColor = "red";
  }
  if(isTouching(rect1,rect3)){
    rect1.shapeColor = "blue";
  }
  
  drawSprites();
}
