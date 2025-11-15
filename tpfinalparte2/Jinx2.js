//se enfrenta a Vi1
class Jinx2 {
  constructor(posX, posY, ji, golpe, dis, gol) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0, 0, 255);
    this.vida = true;
    this.direccion = 1;
    this.velocidad = 2;
    this.balas = [];
    this.tiempoUltimoDisparo = 0;
    this.intervaloDisparo = 1000;
    this.ultimoObjetivo = {
    x: posX, y:posY // guarda último lugar de Vi
  };
  this.j = ji;
  this.golp = golpe;
  this.di = dis;
  this.go = gol;
}

mover() {
  this.posX += this.velocidad * this.direccion;
  if (this.posX > width - 50 || this.posX < 0) {
    this.direccion *= -1;
  }
}

// Disparo hacia la última posición de Vi
dispararAObjetivo(objetivo) {
  if (millis() - this.tiempoUltimoDisparo > this.intervaloDisparo) {
    this.di.play();
    // donde esta VI
    this.ultimoObjetivo.x = objetivo.posX;
    this.ultimoObjetivo.y = objetivo.posY;

    // Donde esta Jinx en comparacion a Vi
    let dx = this.ultimoObjetivo.x - this.posX;
    let dy = this.ultimoObjetivo.y - this.posY;

    // como se mueve la bala
    let pasos = 100;
    let pasoX = dx / pasos;
    let pasoY = dy / pasos;
    let nuevaBala = new Bala2(this.posX + 25, this.posY + 50, pasoX, pasoY);
    this.balas.push(nuevaBala);
    this.tiempoUltimoDisparo = millis();
  }
}

actualizar(objetivo) {
  this.mover();
  this.dispararAObjetivo(objetivo);
  for (let i = 0; i < this.balas.length; i++) {
    let bala2 = this.balas[i];
    if (bala2.disparada) {
      bala2.dibujar();
    }
  }

  if (this.vida) {
    image(this.j, this.posX, this.posY, 50, 50);
  }
}

matar() {
  this.vida = false;
  this.go.play();
}
}
