let groundHeight = 100;
let dino;
let cactus;
let obstacles = [];
let minDistBetweenCacti;
let rangeDistBetweenCacti;
let distToNextCactus;
let spaceDownTimer = 0;
let spaceDown = false;
// let dinoDead = false;

function setup() {
  createCanvas(600, 400);
  frameRate(60);

  // RNG variables
  minDistBetweenCacti = 300;
  rangeDistBetweenCacti = width / 2;

  dino = new Dino();

  let c = nextObstacle();
  obstacles.push(c);
  distToNextCactus =
    Math.random() * rangeDistBetweenCacti + minDistBetweenCacti;
}

function draw() {
  drawToScreen();
  dino.show();
  // if (dinoDead) {
  if (dino.dead) {
    drawEndScreen();
    if (keyIsPressed == true) {
      restart();
    }
  } else {
    play();
  }
}

// --------------------------start the game---------------------------
function play() {
  checkCollision();
  dino.move();

  // Move all cacti
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].show();
    obstacles[i].move();
  }

  // Remove extra cacti, leave one to determine when to get the next cactus
  while (obstacles.length > 1 && obstacles[0].x < 0) {
    obstacles.shift();
  }

  // Create new cactus only if distance to previous cactus has been reached
  if (width - obstacles[obstacles.length - 1].x >= distToNextCactus) {
    let c = nextObstacle();
    obstacles.push(c);
    distToNextCactus =
      Math.random() * rangeDistBetweenCacti + minDistBetweenCacti;
  }

  if (spaceDown) {
    spaceDownTimer++;
  }
}

//------------------------collision check-----------------------------
function checkCollision() {
  if (
    dino.x <= obstacles[0].x + obstacles[0].w  &&
    dino.x + dino.w >= obstacles[0].x 
  ) {
    if (
      dino.y <= obstacles[0].y + obstacles[0].h  &&
      dino.y + dino.h >= obstacles[0].y 
    ) {
      // dinoDead = true;
      dino.dead = true;
    }
  }
}

// ---------------Displays end screen when dino is dead---------------
function drawEndScreen() {
  dino.show();
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].show();
  }
}

//--------------------------------restart-----------------------------

function restart() {
  dino = new Dino();
  obstacles = [];
  let c = nextObstacle();
  obstacles.push(c);
  distToNextCactus =
    Math.random() * rangeDistBetweenCacti + minDistBetweenCacti;

  // dinoDead = false;
}

//-----------------creates backdrop for the dino game-----------------
function drawToScreen() {
  background(0);
  stroke(255);
  strokeWeight(3);
  line(0, height - groundHeight, width, height - groundHeight);
}

// -----------------------controls------------------------------------
function keyPressed() {
  switch (keyCode) {
    case 32:
      if (dino.y == 0) {
        dino.velY = 16;
        dino.gravity = 0.8;
        spaceDown = true;
        spaceDownTimer = 0;
      }
      break;
    case 16:
      dino.duck = true;
      dino.w = 50;
      dino.h = 25;
      dino.gravity = 2.0;

      break;
  }
}

function keyReleased() {
  switch (keyCode) {
    case 32:
      if (spaceDownTimer < 13) {
        dino.gravity = 1.5;
      }
      spaceDown = false;
      break;
    case 16:
      dino.duck = false;
      dino.w = 25;
      dino.h = 50;
      break;
  }
}

// -------------function that returns the next obstacle---------------
function nextObstacle() {
  let obstacles = [new Cactus(), new DoubleCactus(), new Bird()];
  return obstacles[Math.floor(Math.random() * 3)];
}
