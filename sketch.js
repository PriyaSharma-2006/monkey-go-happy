
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0,score=0;
var ground;
var foodGroup;
var obstacleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400) 
  

  monkey=createSprite(80,315,10,10);
    monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
   foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("lightblue")
  
    if( ground.x<0)
  ground.x=  ground.width/2;
  
  if(keyDown("space") ){
    monkey.velocityY=-6;
    }
  monkey.velocityY=monkey.velocityY +0.8;
  monkey.collide (ground)
obstacles();
  fruit();
  
  stroke("white")
  textSize(20);
  fill("white")
  text("Score:"+score,500,50);
   
  stroke("black")
  textSize(30);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
  
  if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();}
    if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
    foodGroup.destroyEach();
  }
 
  

 drawSprites(); 
}

function obstacles(){
  if (frameCount%200===0){
  
  obstacle=createSprite(400,330,10,10)
  
  obstacle.addImage("obstacle",obstacleImage)
  obstacle.velocityX=-6;
  obstacle.scale=0.1;
    obstacleGroup.add(obstacle);
}
}

function fruit(){
 if(frameCount%150===0){
  banana=createSprite(400,150,10,10);
   banana.addImage("banana",bananaImage)
   banana.velocityX=-4;
   banana.scale=0.1
   banana.y=random(100,200)
foodGroup.add(banana)
   
   
   
   
 } 
  
  
  
  
}


