const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1,box3,box4,pig2,log2,box5,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1050,200,50,50);
    box2 = new Box(950,200,50,50);
    ground = new Ground(600, 380, 1200, 20);
    pig1 = new Pig(1000, 200);
    log1 = new Log(1000, 150, 250, PI / 2);
    box3 = new Box(1050, 250, 50, 50);
    box4 = new Box(950, 250, 50, 50);
    pig2 = new Pig(1000, 250);
    log2 = new Log(1000, 230, 250, PI / 2);
    box5 = new Box(1000, 100, 50, 50);
    log3 = new Log(950,100, 100, PI / 7);
    log4 = new Log(1060, 100, 100, -PI / 7);
    bird1 = new Bird(100, 100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}