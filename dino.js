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

    this.imgDead = loadImage('sprites/dinoDead0000.png')
    this.imgRun = [loadImage('sprites/dinorun0000.png'), loadImage('sprites/dinorun0001.png')];
    this.runState = 0;

    this.dead = false;
  }

  show() {
    noFill();
    stroke(255);
    strokeWeight(3);
    // rect(this.x, height - groundHeight - this.y - this.h, this.w, this.h);
    if (this.dead){
      image(this.imgDead, this.x, height - groundHeight - this.y - this.h, this.w, this.h)
    }
    else{
      image(this.imgRun[Math.floor(this.runState/10)], this.x, height - groundHeight - this.y - this.h, this.w, this.h);
      this.runState++;
      this.runState %= (this.imgRun.length * 10);
    }
  }

  move() {
    this.y += this.velY;
    if (this.y > 0) {
      this.velY -= this.gravity; //velY points upwards
    } else {
      this.velY = 0;
      this.y = 0;
    }
  }
}
