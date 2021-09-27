class gotas {
  constructor(x, speedY) {
    this.x = x;
    this.y = 0;
    this.speedY = speedY;
  }
  show() {
    fill(0, 0, 255);
    rect(this.x, this.y, 1, 10);
  }
  move() {
    this.y += this.speedY;
  }
  repeat() {
    if (this.y >= height) {
      //console.log("jaja")
      this.y = 0;
      this.x = random(width);
      this.speedY = random(8, 15);
      this.show();
    }
  }
}
