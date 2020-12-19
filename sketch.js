
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1;
var tree1; 
var stone1;
var mango1,mango2,mango3,mango4;
var mangoImage, boyImage, treeImage, stoneImage;

function preload()
{
	boyImage = loadImage("images/boy.png");
	treeImage = loadImage("images/tree.png");

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(500,600,1000,20); 


	stone1 = new stone(100,465,15);
	mango1 = new mango(710,250,20);
	mango2 = new mango(800,230,20);
	mango3 = new mango(780,300,20);
	mango4 = new mango(860,250,20);
	
	
	

	rope1 = new rope(stone1.body,{x:210,y:470}); 
	

	Engine.run(engine);
	boy=createSprite(260,530); 
	boy.addImage(boyImage); 
	boy.scale=0.1; 

  tree1=createSprite(800,350); 
  tree1.addImage(treeImage); 
   tree1.scale=0.4;
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 
  
  drawSprites(); 
 
  ground1.display(); 
  stone1.display(); 
  mango1.display(); 
  mango2.display(); 
  mango3.display(); 
  mango4.display(); 
  
  rope1.display(); 
  detectCollision(stone1,mango1); 
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3); 
  detectCollision(stone1,mango4); 
  
 
}

function mouseDragged(){ 
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY}) 
}

function mouseReleased(){ 
	rope1.fly(); 
}

function detectCollision(lstone,lmango){ 
	mangoBodyPosition=lmango.body.position; 
	stoneBodyPosition=lstone.body.position; 
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y); 
	if(distance<=lmango.r+lstone.r){
		 Matter.Body.setStatic(lmango.body,false); 
		} 
	}

function keyPressed(){
	 if(keyCode===82){ 
		 rope1.attach(stone1.body); 
		} 
	}
