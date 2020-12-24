
var Blue_Hill, Blue_Hill_Image
var SonicRun, SonicRunImage


function preload(){
SonicRunImage = loadImage("images/SonicRun.gif");
Blue_Hill_Image = loadImage("images/Blue_Hill.png")


}

function setup() {
 createCanvas(600, 400); 
  background("white")
  
Blue_Hill = createSprite(600,35,300,300);
Blue_Hill.addImage("Blue_Hill", Blue_Hill_Image);
Blue_Hill.scale = 4

  
SonicRun = createSprite(300,300,50,50);
SonicRun.addImage("SonicRun", SonicRunImage);
SonicRun.scale = 1




}

function draw() {
  SonicRun.display();
  Blue_Hill.display();
  
  if(keyDown("left_arrow")){
this.camera.y = camera.y
SonicRun.x = SonicRun.x - 5

}
if(keyDown("right_arrow")) {
SonicRun.x = SonicRun.x + 5
}
 drawSprites();
}