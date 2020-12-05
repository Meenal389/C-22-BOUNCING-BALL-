const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine;
var ground;
var ball;
var myWorld;

function setup(){
  createCanvas(400,400);
  
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var ball_option={
    restitution:1
  }

  ball=Bodies.circle(200,100,20,ball_option);

  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,ground_option);

  World.add(myWorld,[ground,ball])
}

function draw(){
  background("black");
  Engine.update(myEngine)

  rectMode(CENTER);
  fill("red")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  fill("green")
  rect(ground.position.x,ground.position.y,400,20);
}