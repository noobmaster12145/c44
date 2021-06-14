var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpeg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  fill("white")
  textSize(15);
  text("(Please Write In Capital Letters)", 750, 30);

  textSize(25);
  text("Score: "+score, 450, 450);


if(score === 3){

  clear();
  background(bg2);
  stroke("white");
  strokeWeight(4);
  fill("black");
  textSize(40);
  text("TREASURE UNLOCKED", 250, 300);


}


  drawSprites()
}