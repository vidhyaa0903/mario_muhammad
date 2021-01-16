const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var obstaclegroup;
var mario,ground;
var coinImg;
var backimg,timg,coins;
var  marioleft;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7;
var wallGroup;
var count = 0;
function preload(){
  coinImg = loadImage("Coin.gif");
  backimg = loadImage("background.png");
  mariowalk = loadImage("mario.gif");
  marioWalk2 = loadImage("mario2.gif");
  timg = loadImage("turtle.gif");
  marioleft = loadImage("mario_left.png")
}
function setup() {
 
  createCanvas(windowWidth,windowHeight);
  backimg.scale = 4;
  engine = Engine.create();
  world = engine.world;
  mario = createSprite(62,540,30,30);
  
  mario.addImage(mariowalk);
  mario.scale = 1.5;
  ground = createSprite(1000,560,2000,5);
  ground.visible = false;
  ground.x = ground.width/2;

  //create wall1
  wall1 = createSprite(100,400,50,50);
  wall1.shapeColor = "red";
  wall2 = createSprite(150,400,50,50);
  wall2.shapeColor = "blue";
  wall3 = createSprite(200,400,50,50);
  wall3.shapeColor = "green";
 
   wall4 = createSprite(383,150,100,20)
   wall4.shape = "Yellow";
   wall4.velocityY = 2;

   wall5 = createSprite(611,293,100,50);
   wall5.velocityX = -2;

   wall6 = createSprite(500,293,20,100);
   wall6.shapeColor = "red";
   wall6.visible = false


   wall7 = createSprite(700,293,20,100);
   wall7.shapeColor = "red";
   wall7.visible = false;
   

  obstaclegroup = new Group();
  coingroup = new Group();
  
  wallGroup = new Group();
  
}


function draw() {
  
  background(backimg);  
  
  Engine.update(engine);
  
  text(mouseX + "," + mouseY, mouseX, mouseY)
   
  spawnobstacles();
  if(keyDown("space")) {
    mario.addImage(marioWalk2)
    mario.velocityY = -15;
  }
  mario.velocityY = mario.velocityY + 0.6   ;
   keyControls();
   wallCollision();  
 
 
  mario.collide(ground);
  
   
  drawSprites();

  edges = createEdgeSprites();
  wall4.bounceOff(edges[0]);
  wall4.bounceOff(edges[1]);
  wall4.bounceOff(edges[2]);
  wall4.bounceOff(edges[3]);
  wall4.bounceOff(ground);
  mario.bounceOff(wall2);
  mario.bounceOff(wall3);
  mario.bounceOff(wall4);
  mario.bounceOff(wall5);

  wall5.bounceOff(wall7);
  wall5.bounceOff(wall6);
  if(mario.isTouching(wall1)){
      mario.velocityX = 0;
      mario.velocityY = 0;
  }
}

function spawnobstacles(){
  if(frameCount%500===0){
    obstacle = createSprite(2000,725,20,20);
    obstacle.scale = 1.3
    obstacle.velocityX = -4;
    obstacle.addImage(timg);
    obstaclegroup.add(obstacle);
    obstaclegroup.setLifetimeEach(-1);
 } 

}

function keyControls(){
  if(keyWentDown(RIGHT_ARROW)){
    mario.addImage(marioWalk2);
    mario.x = mario.x + 100;
  }
  if(keyWentDown(RIGHT_ARROW)){
    mario.addImage(marioWalk2);
    mario.velocityX = 0;
  }
  
  
  
  //mario.velocityY = mario.velocityY + 0.5;
  if(keyWentDown(LEFT_ARROW)){
    mario.addImage(marioleft);
    mario.x = mario.x - 20;
  }
  if(keyWentDown(LEFT_ARROW)){
    mario.addImage(marioleft);
    mario.velocityX = 0;
  }
}

function wallCollision(){
  if(mario.collide(wall2)){
    //  wall2.y = wall2.y -1;
      wall2.disabled = true;
      //count= wall2.y;
      spawnCoins();
      
       }
  }

function spawnCoins(){
      coins = createSprite(wall2.x,wall2.y,20,20);
      coins.velocityY = -1;
      console.log("Count "+count);
      coins.lifetime = 50;  
  }
