
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var keycode=0

var ground;
var treeImg
var tree
var boy,boyImg
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(250,330,10,10)
	boy.addImage("boy",boyImg)
	boy.scale=0.1

	tree=createSprite(750,220,10,10)
	tree.addImage("tree",treeImg)
	tree.scale=0.3

	ground=new Ground(500,height,1000,40);
	stone=new Stone(100,300,50,50);
	sling=new Slingshot(stone.body,{x:200,y:270})

	mango1=new Mango(750,100,50,50);
	mango2=new Mango(700,150,50,50);
	mango3=new Mango(800,200,50,50);
	mango4=new Mango(820,130,50,50);
	mango5=new Mango(650,170,50,50);
	mango6=new Mango(920,150,50,50);
	mango7=new Mango(790,70,50,50);
	mango8=new Mango(710,80,50,50);
	mango9=new Mango(760,160,50,50);
	mango10=new Mango(860,165,50,50);

	
	

	//stone=new Stone()

	
	Engine.run(engine);
  1
}


function draw() {
	
  	rectMode(CENTER);
	  background(200);
	
	  drawSprites();
	  ground.display();
	  sling.display();
	  stone.display();
	  mango1.display();
	  mango2.display();
	  mango3.display();
	  mango4.display();
	  mango5.display();
	  mango6.display();
	  mango7.display();
	  mango8.display();
	  mango9.display();
	  mango10.display();
	  detectCollision(stone,mango1);
	  detectCollision(stone,mango2);
	  detectCollision(stone,mango3);
	  detectCollision(stone,mango4);
	  detectCollision(stone,mango5);
	  detectCollision(stone,mango6);
	  detectCollision(stone,mango7);
	  detectCollision(stone,mango8);
	  detectCollision(stone,mango9);
	  detectCollision(stone,mango10);

 
  
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	sling.fly();
	keycode++
}



function detectCollision(Lstone,Lmango){
	mangoPos=Lmango.body.position
	stonePos=Lstone.body.position

	var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	if(distance<=Lmango.width+Lstone.width||distance<=Lmango.height+Lstone.height){
		Matter.Body.setStatic(Lmango.body,false)
	}
}

function keyPressed(){
	if(keycode===1){
		Matter.Body.setPosition(stone.body,{x:200,y:270})
		sling.attach(stone.body)
		keycode--
	}
}