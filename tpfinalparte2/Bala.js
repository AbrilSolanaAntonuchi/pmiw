class Bala {
  constructor(posX = 0, posY = 0) {
    this.posX = posX;
    this.posY = posY;
    this.vel = 5;        
    this.disparada = false;
  }

  dibujar() {
    if (this.disparada) {
      fill(0);
      ellipse(this.posX, this.posY, 5, 5);
      this.mover();
    }
  }

  mover() {
    if (this.disparada) {
      this.posY -= this.vel;           
      if (this.posY < -10) {       
        this.disparada = false;
      }
    }
  }

  disparar() {
    this.disparada = true;
  }
}
