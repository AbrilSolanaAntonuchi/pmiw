class Obstaculos {
  constructor(posX, posY, velocidad) {
    this.posX = posX;
    this.posY = posY;
    this.vel = velocidad;
    this.miColor = color(0, 255, 0);
  }

  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, 100, 30);
  }

  actualizar() {
    this.posX += this.vel
  }

  reciclar() {
    if (this.posX > 570) {
      this.posX = -80;
    }
  }

  tocadoB(bala) {
    if (bala.disparada) {
      if ( bala.posX > this.posX && bala.posX < this.posX + 100 && bala.posY > this.posY &&bala.posY < this.posY + 30) 
      {
        bala.disparada = false;
        // cambia el color del obstaculo cuando le pegas, no se se me hizo chistoso
        this.miColor = color(random(255), random(255), random(255));
      }
    }
  }

  mover() {
  }
}
