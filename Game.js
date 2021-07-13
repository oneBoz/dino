let groundHeight = 100;
let dino;
let cactus;
let obstacles = [];

function setup() {
  createCanvas(600, 400);
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
        dino.velY = 10;
      }
      break;
  }
}
