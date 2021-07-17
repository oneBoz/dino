let groundHeight = 100;
let dino;
let cactus;
let obstacles = [];
let spaceDownTimer = 0;
let spaceDown = false;

function setup() {
  createCanvas(600, 400);
  frameRate(60);
  dino = new Dino();
  for (let i = 0; i < 2; i++) {
    let c = new Cactus();
    obstacles.push(c);
  }
}

function draw() {
  drawToScreen();
  dino.show();
  dino.move();
  obstacles[0].show();
  obstacles[0].move();

  if (obstacles[0].x < 0) {
    obstacles.shift();
    let c = new Cactus();
    obstacles.push(c);
  }
  
  if (spaceDown) {
    spaceDownTimer++;
  }
  

  
}

//displays everything on screen
function drawToScreen() {
  background(0);
  stroke(255);   
  strokeWeight(3);
  line(0, height - groundHeight, width, height - groundHeight);
}

function keyPressed() {
  switch (key) {
    case " ":
      if (dino.y == 0) {
        dino.velY = 16; 
        dino.gravity = 0.8;
        spaceDown = true;
        spaceDownTimer = 0;
      }
      break;
  }
}

function keyReleased() {
  switch (key) {
    case " ":
      if (spaceDownTimer < 13) {
        dino.gravity = 1.5;
      }
      spaceDown = false;
      break;
  }
}









