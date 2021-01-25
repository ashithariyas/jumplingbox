var canvas;
var music;
var object1,object2,object3,object4;
var movingBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    
    movingBox=createSprite(random(20,750),100,40,40);
    movingBox.shapeColor=rgb(255,255,255);
    movingBox.velocityX = 4;
    movingBox.velocityY = 9;
   // movingBox.debug = true;

    object1=createSprite(0,580,360,30);
    object1.shapeColor= rgb(0,0,255);

    object2=createSprite(295,580,200,30);
    object2.shapeColor = rgb(255,128,0);


    object3=createSprite(515,580,200,30);
    object3.shapeColor= rgb(153,0,76);


    object4=createSprite(740,580,220,30);
    object4.shapeColor= rgb(0,100,0);

    
    }

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    movingBox.bounceOff(edges);
    if(object1.isTouching(movingBox) && movingBox.bounceOff(object1)){
       movingBox.shapeColor = rgb(0,0,255);
        music.play();
    }
    if(object2.isTouching(movingBox)){
       movingBox.shapeColor = rgb(255,128,0);
       movingBox.velocityX = 0;
       movingBox.velocityY = 0;
        music.stop();
    }

    if(object3.isTouching(movingBox) && movingBox.bounceOff(object3)){
        movingBox.shapeColor = rgb(153,0,76);
    }
    
       
    if(object4.isTouching(movingBox) && movingBox.bounceOff(object4)){
        movingBox.shapeColor = rgb(0,100,0);
    }
    drawSprites();
} 
      
      
      
      
      


