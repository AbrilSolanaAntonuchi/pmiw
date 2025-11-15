//el jugador elige a Vi
//se enfrenta a Jinx2
class Vi1 {
  constructor(x, y, vi, gol,golpe) {
    this.posX = x;
    this.posY = y;
    this.miColor = color(255, 0, 0);
    this.vida = true;
    this.vel = 2;
    this.v = vi;
    this.go = gol;
    this.golp = golpe;
  }

  dibujar() {
    if (this.vida) {
      image(this.v, this.posX, this.posY, 50, 50);
    }
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= this.vel;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += this.vel;
    }
    if (keyIsDown(UP_ARROW)) {
      this.posY -= this.vel;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.posY += this.vel;
    }
    this.posX = constrain(this.posX, 0, width - 50);
    this.posY = constrain(this.posY, 0, height - 50);
  }

  matar() {
    this.vida = false;
    this.golp.play();
  }

  // recibe un objeto bala y chequea colisión circular
  tocadoPorBalas(bala2) {
    if (!bala2 || !bala2.disparada) {
      return;
    }
  // la distancia entre el personaje y la bala, el radio es 25 pq es el centro del personaje 
    let dx = this.posX + 25 - bala2.posX;
    let dy = this.posY + 25 - bala2.posY;

    if (dx * dx + dy * dy < 25 * 25) { 
      this.matar();
      bala2.disparada = false;
    }
  }

  // colision con Jinx
  atacar(jinx) {
    if (this.vida && jinx.vida &&
      this.posX < jinx.posX + 50 &&
      this.posX + 50 > jinx.posX &&
      this.posY < jinx.posY + 50 &&
      this.posY + 50 > jinx.posY) {
      jinx.matar();
    }
  }
}
