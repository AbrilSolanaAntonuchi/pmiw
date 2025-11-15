//el jugador elige a Jinx
//se enfrenta a Vi2
class Jinx1 {
  constructor(posX, posY, ji, golpe, dis) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0, 0, 255);
    this.vida = true;
    this.balas = []; // arreglo de balas
    this.velMovimiento = 2;
    this.j = ji;
    this.golp = golpe;
    this.di = dis;
  }

  dibujar() {
    // movimiento por teclas
    this.moverMas();

    // dibujar todas las balas activas
    for (let i = 0; i < this.balas.length; i++) {
      let b = this.balas[i];
      if (b.disparada) {
        b.dibujar();
      }
    }

    // dibujar personaje
    if (this.vida) {
      image(this.j, this.posX, this.posY, 50, 50);
    }
  }

  teclaP(keyCode) {
    if (keyCode == 32) { //barra
      this.dispararBala();
    }
  }

  moverMas() {
    if (keyIsDown(LEFT_ARROW)) {
      this.moverIzquierda();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.moverDerecha();
    }
  }

  moverDerecha() {
    if (this.posX < width - 50) {
      this.posX += this.velMovimiento;
    }
  }

  moverIzquierda() {
    if (this.posX > 0) {
      this.posX -= this.velMovimiento;
    }
  }

  dispararBala() {
    let nuevaBala = new Bala(this.posX + 25, this.posY);
    nuevaBala.disparar();
    this.balas.push(nuevaBala);
    this.di.play();
  }

  Disparo() {
    for (let i = 0; i < this.balas.length; i++) {
      if (this.balas[i].disparada) {
        return true;
      }
    }
    return false;
  }

  matar() {
    this.vida = false;
    this.golp.play();
  }
}
