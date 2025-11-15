class Juego2 {
  constructor(viee, jinx, golpeFJ, golpe, dispa) {
    this.jin = jinx;
    this.vie = viee;
    this.golpeF = golpeFJ
    this.golp = golpe
    this.disp = dispa;
    this.jinx2 = new Jinx2(width / 2 - 25, 50, this.jin,this.golpeF,this.disp,this.golp);
    this.vi1 = new Vi1(width / 2 - 25, 300, this.vie,this.golp,this.golpeF);
  }

  dibujar() {
    if (this.vi1.vida && this.jinx2.vida) {
      this.jinx2.actualizar(this.vi1);
      this.vi1.mover();
      this.vi1.dibujar();
      this.controlarColisiones();
    } else {
      textAlign(CENTER, CENTER);
      textSize(40);
      fill(0);
      if (!this.vi1.vida) text("¡Perdiste!", width / 2, height / 2);
      else text("¡Ganaste!", width / 2, height / 2);
    }
  }

  controlarColisiones() {
    this.vi1.atacar(this.jinx2);
    for (let i = 0; i < this.jinx2.balas.length; i++) {
      this.vi1.tocadoPorBalas(this.jinx2.balas[i]);
    }
  }
}
