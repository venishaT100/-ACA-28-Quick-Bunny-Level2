function preload() {
  bgImage = loadImage("images/grass.jpg");
  bunnyImage = loadImage("images/bunny.jpg");
  carrotImage = loadImage("images/carrot.png");
}


function setup() {
  createCanvas(600,600);

  bg = createSprite(300,300);
  bg.addImage(bgImage);
  bg.scale= 2;

  edges = createEdgeSprites();
  bunny = createSprite(40,550,20,20);
  bunny.addImage(bunnyImage);
  bunny.scale = 0.06;
  carrot = createSprite(560,40,30,30);
  carrot.addImage(carrotImage);
  carrot.scale = 0.1;
  brick1 = createSprite(300,120,100,20);
  brick1.velocityX = 5;
  brick2 = createSprite(300,320,100,20);
  brick2.velocityX= -5;
  brick3 = createSprite(300,120,100,20);
  brick3.velocityX = -5;
  brick4 = createSprite(300,320,100,20);
  brick4.velocityX = 5;

 
}

function draw() {
    

  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  brick1.bounceOff(edges[1]);
  brick1.bounceOff(edges[0]);
  brick2.bounceOff(edges[1]);
  brick2.bounceOff(edges[0]);
  brick3.bounceOff(edges[1]);
  brick3.bounceOff(edges[0]);
  brick4.bounceOff(edges[1]);
  brick4.bounceOff(edges[0]);


  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if(bunny.isTouching(carrot)){
    text("you win",300,450);
  }
  if(bunny.isTouching(brick1)){
    bunny.x=40;
    bunny.y=550;
    text("Again",300,450);
  }
  if(bunny.isTouching(brick2)){
    bunny.x=40;
    bunny.y=550;
    text("Again",300,450);
  }

  if(bunny.isTouching(brick3)){
    bunny.x=40;
    bunny.y=550;
    text("Again",200,200);
  }
  drawSprites();

  bunny.shapeColor = "pink"
  carrot.shapeColor = "orange"
  brick1.shapeColor = "red"
  brick2.shapeColor = "red"
  brick3.shapeColor = "red"
  brick4.shapeColor = "red"


}


  