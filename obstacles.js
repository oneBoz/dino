class Cactus {
  constructor(){
    this.x = width;
    this.y = 0;
    this.h = 50;
    this.w = 25
    
    this.xSpeed = -5;
  }
  
  show(){
    fill(255);
    noStroke();
    rect(this.x, height - groundHeight - this.h, this.w, this.h);
  }
  
  move(){
    this.x += this.xSpeed;
  }
}