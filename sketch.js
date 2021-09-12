const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var rope1,rope2,rope3,rope4,rope5;

var bob1,bob2,bob3,bob4,bob5;

//Create multiple bobs, mulitple ropes varibale here
	
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	rope1=new rope(bob1,roof,-80,0);
	rope2=new rope(bob2,roof,-80,0);
	rope3=new rope(bob3,roof,-80,0);
	rope4=new rope(bob4,roof,-80,0);
	rope5=new rope(bob5,roof,-80,0);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  roof.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}