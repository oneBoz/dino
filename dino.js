let player_x_pos = 50;
let playerWidth = 25;


class Dino {
  constructor() {
    this.x = player_x_pos;
    this.w = playerWidth;
    this.velY = 0;

    this.h = this.w * 2;
    this.y = 0;
    this.gravity = 1.3;
  }

  show() {
    noFill();
    stroke(255);
    strokeWeight(3);
    rect(this.x, height - groundHeight - this.y - this.h, this.w, this.h);
  }

  move() {
    this.y += this.velY;
    if (this.y > 0) {
      this.velY -= this.gravity; //velY points upwards
    } else {
      this.velY = 0;
      this.y = 0;
      this.gravity = 1.2
    }
  }
}
