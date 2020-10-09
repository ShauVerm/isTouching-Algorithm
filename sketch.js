var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600,400,50, 80);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "blue";
} 
function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect,movingRect)){
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  } else{
   fixedRect.shapeColor = "blue";
   movingRect.shapeColor = "blue";
  }

  drawSprites();
}