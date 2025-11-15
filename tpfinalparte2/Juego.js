class Juego {
  constructor(cantObst, jinx, viee, golpeFJ, dispa) {
    this.cantObst = cantObst;
    this.jin = jinx;
    this.vie = viee
    this.golpeF = golpeFJ
    this.disp = dispa
      this.crearJinx1();
    this.crearVi2();
    this.crearObstaculos();
  }

  crearJinx1() {
    this.jinx1 = new Jinx1(width / 2 - 25, 400, this.jin, this.golpeF, this.disp); 
  }

  crearVi2() {
    this.vi2 = new Vi2(width / 2 - 25, 50, this.vie, this.golpeF);
  }

  crearObstaculos() {
    this.obstaculos = [];
    for (let i = 0; i < this.cantObst; i++) {
      let velocidad =(2.5);
      this.obstaculos.push(new Obstaculos(i * 160, 200, velocidad));
    }
  }

  dibujar() {
    this.vi2.actualizar();
    this.jinx1.dibujar();
    this.vi2.dibujar();

    for (let i = 0; i < this.cantObst; i++) {
      this.obstaculos[i].actualizar();
      this.obstaculos[i].reciclar();
      this.obstaculos[i].dibujar();

      // colision bala a obstaculo
      for (let i = 0; i < this.jinx1.balas.length; i++) {
        let b = this.jinx1.balas[i];
        for (let j = 0; j < this.obstaculos.length; j++) {
          this.obstaculos[j].tocadoB(b);
        }
      }
    }

    //colision bala a Vi2
    for (let i = 0; i < this.jinx1.balas.length; i++) {
      let b = this.jinx1.balas[i];
      this.vi2.tocadoB(b);
    }
  }


  teclaP(keyCode) {
    this.jinx1.teclaP(keyCode);
  }
}
