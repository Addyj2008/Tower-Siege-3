const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine, world;
let slingshot1, ground1, ground2, polygon, polygon_IMG, drag;
let box1, box2, box3, box4, box5, box6, box7, box8, box9;

function preload() {
    polygon_IMG = loadImage('Hexagon.png');
}

function setup() {
    createCanvas(1200,400);
    imageMode(CENTER);
    drag = false;
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600, height, 1200 ,20)
    ground2 = new Ground(900, height*7/8, 600, height/4);
    polygon = Bodies.circle(150, 200, 20);
    World.add(world, polygon);
    slingshot1 = new Slingshot(polygon, {'x' : 150, 'y' : 200});
    box1 = new Box(650, height*3/4 - 25, 50, 50, 255, 0, 0);
    box2 = new Box(700, height*3/4 - 25, 50, 50, 0, 0, 255);
    box3 = new Box(750, height*3/4 - 25, 50, 50, 0, 255, 0);
    box4 = new Box(800, height*3/4 - 25, 50, 50, 0, 0, 255);
    box5 = new Box(850, height*3/4 - 25, 50, 50, 255, 0, 0);
    box6 = new Box(700, height*3/4 - 75, 50, 50, 255, 0, 0);
    box7 = new Box(750, height*3/4 - 75, 50, 50, 0, 0, 255);
    box8 = new Box(800, height*3/4 - 75, 50, 50, 255, 0, 0);
    box9 = new Box(750, height*3/4 - 125, 50, 50, 255, 0, 0);
}

function mouseDragged() {
    if (mouseX - polygon.position.x < 20 && mouseX - polygon.position.x > -20 && mouseY - polygon.position.y < 20 && mouseY - polygon.position.y > -20) {
        drag = true;
    }
}

function mouseReleased() {
    if (drag) {
        slingshot1.fly();
        drag = false
    }
}

function draw() {
    background(0, 0, 0);
    Engine.update(engine);
    image(polygon_IMG, polygon.position.x, polygon.position.y, 40, 40);
    displayAllBoxes();
    displayAllGrounds();
    slingshot1.display();
    if (drag) {
        Body.setPosition(polygon, {x : mouseX, y : mouseY});
    }
}