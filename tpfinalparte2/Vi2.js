class Vi2 {
  constructor(posX, posY, vi, golpe) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
    this.vida = true;
    this.velocidad = 1;
    this.direccion = 1;
    this.v = vi;
    this.golp = golpe;
  }

  dibujar() {
    if (this.vida) {
      image(this.v, this.posX, this.posY, 50, 50);
    }
  }

  mover() {
    this.posX += this.velocidad * this.direccion;
    if (this.posX > width - 50 || this.posX < 0) {
      this.direccion *= -1;
    }
  }

  actualizar() {
    this.mover();
    this.dibujar();
  }

  matar() {
    this.vida = false;
  }

  tocadoB(bala) {
    if (!bala || !bala.disparada) {
      return;
    }

    if (
      bala.posX > this.posX &&
      bala.posX < this.posX + 50 &&
      bala.posY > this.posY &&
      bala.posY < this.posY + 50
      ) {
      this.matar();
      bala.disparada = false; 
      this.golp.play();
    }
  }
}
