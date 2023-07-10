var tower,towerImg
var player

function preload(){

  towerImg=loadImage("tower.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-122);

  tower=createSprite(203,displayHeight-325,84,167)
  tower.addImage("tower",towerImg)

  player=createSprite(203,displayHeight-450)
}

function draw() {
  background("black");  
  drawSprites();
}