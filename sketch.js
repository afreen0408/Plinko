const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
 ground=new Ground(width/2,height,width,10)
// divisions
for(var k=0; k<=innerWidth;k+=80){
  divisions.push(new Division (k, height-divisionHeight/2,10,divisionHeight))
}
//plinko row 1
for (var j=40;j<=width;j+=50){
  plinkos.push(new Plinko(j,75));
}
//plinko row 2
for (var j=15;j<=width+10;j+=50){
  plinkos.push(new Plinko(j,175));
}
//plinko row 3
for (var j=40;j<=width;j+=50){
  plinkos.push(new Plinko(j,275));
}
//plinko row 4
for (var j=15;j<=width+10;j+=50){
  plinkos.push(new Plinko(j,375));
}



 Engine.run(engine);
}

function draw() {
  background(0); 
  ground.display();
  //display divisions
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  //display plinkos
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(230,250),10))
  }
  // display particles
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  drawSprites();
}