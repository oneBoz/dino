let groundHeight = 100;
let dino;
let cactus;
let obstacles = [];
let minDistBetweenCacti;
let rangeDistBetweenCacti;
let distToNextCactus;
let spaceDownTimer = 0;
let spaceDown = false;



function setup() {
  createCanvas(600, 400);
  frameRate(60);

  // RNG variables
  minDistBetweenCacti = 300;
  rangeDistBetweenCacti = width;

  dino = new Dino();

  for (let i = 0; i < 2; i++) {
    let c = new Cactus();
    obstacles.push(c);
    distToNextCactus = Math.random() * width + minDistBetweenCacti;
  }
}

function draw() {
  drawToScreen();
  dino.show();
  dino.move();

  // Move all cacti
  for(let i=0; i<obstacles.length; i++){
    obstacles[i].show();
    obstacles[i].move();
  }

  // Remove extra cacti, leave one to determine when to get the next cactus
  while (obstacles.length > 1 && obstacles[0].x < 0) {
    obstacles.shift();
  }

  // Create new cactus only if distance to previous cactus has been reached
  if (width - obstacles[obstacles.length-1].x >= distToNextCactus) {
    let c = new Cactus();
    obstacles.push(c);
    distToNextCactus = Math.random() * width + minDistBetweenCacti;
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
