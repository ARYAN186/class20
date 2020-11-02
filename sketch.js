var rect1,rect2;

function setup() {
  createCanvas(800,400);
 rect1 =  createSprite(400, 200, 50, 80);
 rect1.shapeColor = "silver";
 rect2 = createSprite(200,70,80,30);
 rect2.shapeColor = "silver";
}

function draw() {
  background("BLACK");  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
    && rect1.y - rect2.y < rect1.height/2 + rect2.height/2
    && rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
    rect1.shapeColor = "yellow";
    rect2.shapeColor = "yellow";
  }
else{
  rect1.shapeColor = "silver";
  rect2.shapeColor = "silver";
}

  drawSprites();
}