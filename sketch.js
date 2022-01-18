var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
}

function draw() {
  background(200);
  
  if(tower.y > 600){
      tower.y = 0;
    }
  createDoor();
  drawSprites();
}

function createDoor() {
if (frameCount % 240 === 0) {
  door = createSprite(200, -50);
  door.addImage("door", doorImg);
  door.x = Math.round(random(120, 400));
  door.velocityY = 1;
  door.lifetime = 800;
  doorsGroup.add(door);

  climber = createSprite(200, 10);
  climber.addImage("climber", climberImg);
  climber.velocityY = 1;
  climber.lifetime = 800;
  climbersGroup.add(climber);
  door.x = climber.x;

  invisibleBlock = createSprite(200, 15);
  invisibleBlock.width = climber.width;
  invisibleBlock.height = 2;
  invisibleBlock = 1;
  invisibleBlock.lifetime = 800;
  invisibleBlockGro.add(invisibleBlock);
  invisibleBlock.debug = true;
  climber.x = invisibleBlock.x;
 }
}
