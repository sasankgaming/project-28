
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyImage,boy;
var ground,stone,tree,ground,mango1,mango2,mango3,mango4;

function preload()
{
	boyImage=loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);

	boy = addAnimation("boyImage");
	boy = (100,100,30,70);

	stone = new Stone(105,105,10,10);
	tree = new Tree (650,690);

	mango1 =new Mango(600,620);
	mango2 =new Mango(620,640);
	mango3 =new	Mango(640,620);
	mango4 =new Mango(620,620);
	ground = new Ground(400,690,800,10);
	slingShot = new Slingshot(bird.body,{x : 105, y : 105 });


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);


  
  drawSprites();
 
}

function mouseDragged (){
    Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY});

}

function mouseReleased(){

slingShot.fly();
}

function deteollision(stone,mango){
	mongoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body,position

	var distance = dist(sroneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<-mango.r+stone.r){
		Matter.Body.serStatic(mango.body,false);
	}	
}

function keyPressed{
if(keyCode === 32){
	Matter.Body.setPosition(stone.body,{x:235,y:420})
	slingShot.attach(stone.body);
    

	}
}








