var a;


function preload(){

    
}

function setup() {
    createCanvas(windowWidth,windowHeight);
   a = createA("mailto:mathwithmaster@outlook.com","Mail Us","_blank");
   a.position(width/2 - 28, height/2);
}

function draw() {
    background("white");
    textSize(50);
    fill("black");
  text("Having A Doubt?",width/2 - 150,150);
  a.class("a");

    drawSprites();

}