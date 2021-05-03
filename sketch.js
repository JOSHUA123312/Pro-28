
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy,boyIMG

function preload()
{
boyIMG=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
stone=new Stone(180,490,50)
ground=new Ground(400,610,800,10)
tree=new Tree(600,420,400,400)
boy=createSprite(200,550,250,250)
boy.addImage(boyIMG)
boy.scale=0.1
chain=new Chain(stone.body,{x:150,y:495})
mango1=new Mango(480,350,80)
mango2=new Mango(500,350,80)
mango3=new Mango(550,330,80)
mango4=new Mango(570,330,80)
mango5=new Mango(650,320,80)
mango6=new Mango(700,400,80)
mango7=new Mango(750,400,80)
Engine.run(engine);

}


function draw() {
  background(255);
  
  
  rectMode(CENTER);
  fill("green")
  textSize(20)
  text("Press Space to get second chance to play",50,50)
 
  tree.display()
  ground.display()
  chain.display()
  stone.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 

 detectCollision(stone,mango1)
 detectCollision(stone,mango2)
 detectCollision(stone,mango3)
 detectCollision(stone,mango4)
 detectCollision(stone,mango5)
 detectCollision(stone,mango6)
 detectCollision(stone,mango7)

  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if (keyCode === 32) {
  Matter.Body.setPosition(stone.body,{x:150,y:495})
  chain.attach(stone.body)
  }
}

function detectCollision(lstone,lmango){
  if(lstone.body.position.x- lmango.body.position.x <lmango.radius + lstone.radius
		&& lmango.body.position.x - lstone.body.position.x  < lmango.radius+ lstone.radius
		&&lstone.body.position.y -lmango.body.position.y < lmango.radius+ lstone.radius
		&& lmango.body.position.y - lstone.body.position.y < lmango.radius + lstone.radius){
		Matter.Body.setStatic(lmango.body,false);
	}
   
}