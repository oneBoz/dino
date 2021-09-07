class Cactus {
  constructor(){
    this.x = width;
    this.y = 0;
    this.h = 50;
    this.w = 25
    
    this.xSpeed = -5;
    
    this.img = loadImage('sprites/cactusBig0000.png');
  }
  
  show(){
    fill(255);
    noStroke();
    // rect(this.x, height - groundHeight - this.h - this.y, this.w, this.h);
    image(this.img, this.x, height - groundHeight - this.h - this.y, this.w, this.h);
  }
  
  move(){
    this.x += this.xSpeed;
  }
}

class DoubleCactus {
  constructor(){
    this.x = width;
    this.y = 0;
    this.h = 25;
    this.w = 50
    
    this.xSpeed = -5;

    this.img = loadImage('sprites/cactusSmallMany0000.png');
  }
  
  show(){
    fill(255);
    noStroke();
    // rect(this.x, height - groundHeight - this.h - this.y, this.w, this.h);
    image(this.img, this.x, height - groundHeight - this.h - this.y, this.w, this.h);
  }
  
  move(){
    this.x += this.xSpeed;
  }
}

class Bird {
  constructor(){
    this.x = width;
    this.y = 40 * Math.ceil(Math.random() * 2);
    this.h = 25;
    this.w = 25
    
    this.xSpeed = -5;

    this.img = [loadImage('sprites/berd.png'), loadImage('sprites/berd2.png')];
    this.imgState = 0;
  }
  
  show(){
    fill(255);
    noStroke();
    // rect(this.x, height - groundHeight - this.h - this.y, this.w, this.h);
    image(this.img[Math.floor(this.imgState/10)], this.x, height - groundHeight - this.h - this.y, this.w, this.h);
    this.imgState++;
    this.imgState %= (this.img.length * 10);
  }
  
  move(){
    this.x += this.xSpeed;
  }
}