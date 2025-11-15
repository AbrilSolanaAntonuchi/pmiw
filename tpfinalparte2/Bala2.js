class Bala2 {
  constructor(posX, posY, dx, dy) {
    this.posX = posX;
    this.posY = posY;
    this.dx = dx;
    this.dy = dy;
    this.vel = 2;
    this.disparada = true;
  }

  mover() {
    if (this.disparada) {
      this.posX += this.dx * this.vel;
      this.posY += this.dy * this.vel;
      if (this.posX < 0 || this.posX > width || this.posY < 0 || this.posY > height) {
        this.disparada = false;
      }
    }
  }

  dibujar() {
    if (this.disparada) {
      fill(0);
      ellipse(this.posX, this.posY, 5, 5);
      this.mover();
    }
  }
}
