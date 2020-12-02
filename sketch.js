const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

//Naming variables
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var standObject;
var slingObject1, slingObject2, slingObject3, slingObject4, slingObject5;


function setup() {
  createCanvas(800, 400);
  
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

    //Create the bodies here
    bobObject1 = new Bob(300, 350, 50);
    bobObject2 = new Bob(350, 350, 50);
    bobObject3 = new Bob(400, 350, 50);
    bobObject4 = new Bob(450, 350, 50);
    bobObject5 = new Bob(500, 350, 50);
    
    standObject = new Stand(400,100,300,40);
    
    slingObject1 = new Arm(bobObject1.body, standObject.body, -50*2,0);
    slingObject2 = new Arm(bobObject2.body, standObject.body, -25*2,0);
    slingObject3 = new Arm(bobObject3.body, standObject.body, -0*2,0);
    slingObject4 = new Arm(bobObject4.body, standObject.body, 25*2,0);
    slingObject5 = new Arm(bobObject5.body, standObject.body, 50*2,0);
 
    Engine.run(engine); 
}


function draw() {
  background("gold");

  rectMode(CENTER);
  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  standObject.display();

  slingObject1.display();
  slingObject2.display();
  slingObject3.display();
  slingObject4.display();
  slingObject5.display();
  
  keyPressed();
  drawSprites();
}

function keyPressed()  
{ 
	if (keyCode === UP_ARROW) 
	{
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-100,y:-100}); 
  } 
} 