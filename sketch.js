const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground1;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight=300;
function setup() {
var canvas= createCanvas(800,800);
engine = Engine.create();
world=engine.world;
ground1 = new ground(width/2,height,width,20);
for (i=0;i<=innerWidth;i=i+80){
  divisions.push(new division(i,height-divisionheight/2,10,divisionheight))
}
for (var j =40;j <= innerWidth;j=j+50){
  plinkos.push(new plinko(j,75));
}
for (var j =15;j <= innerWidth;j=j+50){
  plinkos.push(new plinko(j,175));
}
for (var j =40;j <= innerWidth;j=j+50){
  plinkos.push(new plinko(j,275));
}
for (var j =15;j <= innerWidth;j=j+50){
  plinkos.push(new plinko(j,375));
}
console.log("plinkos length ", plinkos.length)
}
function draw() {
  background("red");  
Engine.update(engine);
ground1.display();
for(k=0;k<=plinkos.length -1;k=k+1){
  plinkos[k].display();
 }
if (frameCount%30 ===0){
  particles.push(new particle(random(0,width-20),10,15));
}
//console.log(particles.length);
for(l=0;l<=particles.length-1;l=l+1){
  particles[l].display();
 }
 for(var m=0;m<=divisions.length-1;m++){
  divisions[m].display();
 }

}



