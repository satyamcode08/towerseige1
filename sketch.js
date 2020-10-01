

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);
 var ground=createSprite(400,400,200,5);
 box=new Box(250,400,50,50);
 box1=new Box(300,400,50,50);
 box2=new Box(350,400,50,50);
 box3=new Box(400,400,50,50);
 box4=new Box(277,400,50,50);
  
}

function draw() {
  background(255,255,255);
  box.display();  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
drawSprites();
}