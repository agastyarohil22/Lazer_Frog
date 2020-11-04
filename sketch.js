const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var frog , ground;

function setup(){
    var canvas = createCanvas(displayWidth-10,displayHeight-150);
    engine = Engine.create();
    world = engine.world;
    frog = new Frog(200,200,60,60);
    ground = new Ground(displayWidth/2,displayHeight/2,displayWidth,20);


   

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

if (keyCode===37){

frog.bodies.position.x = frog.bodies.position.x-1;

}

if (keyCode===39){


    frog.bodies.position.x = frog.bodies.position.x +1;

}








    frog.display();
    ground.display();
}