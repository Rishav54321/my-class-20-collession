var mr
var fr 

function setup() {
  createCanvas(800,400);
  mr=createSprite(600,200,90,60)
  mr.shapeColor="red"

  fr=createSprite(400,300,50,80)
  fr.shapeColor="red"

}

function draw() {
  background(255,255,255); 
  mr.x=World.mouseX
  mr.y=World.mouseY
  
if(mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2
  && mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2
  
  ){
mr.shapeColor="purple"
fr.shapeColor="purple"
}
else{
mr.shapeColor="red"
fr.shapeColor="red"
}
  drawSprites();
}