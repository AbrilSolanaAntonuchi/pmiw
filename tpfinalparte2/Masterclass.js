class MasterClass {
  constructor(Fmen, Fregla, flecha, jinxee, vieeee, elegi,dispar,golpeFJin,golpeFV) {
    this.juegoActual = null; // null = menú
    this.Fme = Fmen;
    this.Fregla = Fregla;
    this.flecha = flecha;
    this.jinxe = jinxee;
    this.vieee = vieeee;
    this.eleg = elegi;
    this.dispa = dispar;
    this.golpeFJi = golpeFJin;
    this.golpeF = golpeFV;
    this.estadoMenu = "principal";
  }

  dibujar() {
    // Si estamos jugando, dibujar solo el juego
    if (this.juegoActual != null) {
      this.juegoActual.dibujar();

      // Si terminó el juego, muestro volver
      if (
        (this.juegoActual.vi1 && !this.juegoActual.vi1.vida) ||
        (this.juegoActual.vi2 && !this.juegoActual.vi2.vida) ||
        (this.juegoActual.jinx1 && !this.juegoActual.jinx1.vida) ||
        (this.juegoActual.jinx2 && !this.juegoActual.jinx2.vida)
        ) {
        this.mostrarBotonVolver();
      }
      if (this.juegoActual.vi2 && !this.juegoActual.vi2.vida) {
        fill(0)
          text("¡Ganaste!\n"+"podes volver al menu o quedarte cambiando de color los obstaculos", 100, 40, 480, 220);
      }
      return;
    }

    // Estamos en el menu (no hay juego activo)
    if (this.estadoMenu === "principal") {
      this.mostrarMenu();
    } else if (this.estadoMenu === "reglas") {
      this.mostrarReglas();
    } else if (this.estadoMenu === "creditos") {
      this.mostrarCreditos();
    }
  }

  mostrarMenu() {
    // dibuja fondo y opciones
    if (this.Fme) {
      image(this.Fme, 0, 0, width, height);
      image(this.jinxe, 460, 180, 200, 300);
      image(this.vieee, -10, 160, 200, 330);
      textAlign(CENTER, CENTER);
      textSize(30);
      fill(255);
      text("Menú", width / 2, 50);


      fill(100, 0, 200);
      rect(width / 2 - 150, 260, 300, 50, 10);
      fill(255);
      textSize(20);
      text("¿Como Jugar?", width / 2, 260 + 25);


      fill(0, 150, 200);
      rect(width / 2 - 150, 330, 300, 50, 10);
      fill(255);
      text("Creditos", width / 2, 330 + 25);


      fill(0, 0, 255);
      rect(width / 2 - 150, 120, 300, 50, 10);
      fill(255);
      text("Jinx", width / 2, 120 + 25);


      fill(255, 0, 0);
      rect(width / 2 - 150, 190, 300, 50, 10);
      fill(255);
      text("Vi", width / 2, 190 + 25);
    }
  }

  mostrarReglas() {
    if (this.Fregla) {
      image(this.Fregla, 0, 0, width, height);
      fill(255);
      textAlign(CENTER);
      textSize(30);
      text("¿CÓMO SE JUEGA?", width / 2, 60);

      // RECTÁNGULO PARA EL TEXTO
      fill(230);
      rect(60, 90, 520, 260, 12);

      // Texto dentro del rectángulo
      fill(0);
      textAlign(LEFT, TOP);
      textSize(14);
      text( "Modo de juego: Jinx1 vs Vi2\n\n" + "El juego consiste en que Jinx debe dispararle a Vi. Sin embargo, entre ellas hay varios obstáculos y Vi se mueve constantemente de un lado a otro, lo que hace que el desafío sea más difícil. Si Jinx logra acertarle un disparo a Vi, el jugador gana la partida.\n\n" +
        "Modo de juego: Vi1 vs Jinx2\n\n" + "El juego consiste en que Vi debe esquivar las balas que Jinx le dispara, mientras intenta acercarse a ella. Si Vi logra alcanzarla, gana la partida; pero si una de las balas la toca, pierde el juego.",
        80, 110, 480, 220);


      image(flechas, width / 2 - 300, 360, 180, 100);
      fill(230);
      rect(410, 400, 220, 30);
      fill(255);
      textSize(14);
      text("BARRA ESPACIADORA = DISPARAR", width / 2 + 80, 450);
      fill(255)
        text("FLECHAS = MOVERSE", width / 2 - 285, 450);

      this.mostrarBotonVolver();
    }
  }

  mostrarCreditos() {
    background(20);
    fill(255);
    textAlign(CENTER, TOP);
    textSize(24);
    text("CRÉDITOS", width / 2, 30);

    textSize(16);
    text(
      "Juego creado por:\n" +
      "Abril Solana Antonuchi y Melany sanchez\n\n" +
      "Codigo por:\n" +
      "Abril Solana Antonuchi\n"+ "Hanna de comi1\n"+ "Chat gpt\n\n"+
      "Imagenes, Sonidos y Texto por:\n"+
      "Melany Sanchez\n\n"+
      "Los personajes pertenecen a\n"+
      "ARCANE\n\n",
      width / 2,
      90
      );
      textSize(14)
      text(
      "Agradecimiento especial a:\n" +
      "Bruno de taller, no ayudo nada pero me enseño Ctrl+T y solamente por eso el codigo se ve lindo.\n"+ "Y a los videos de yt q van a vivir en mi historial y espero no volver a ver.\n",
      width / 2,
      360
      );

    this.mostrarBotonVolver();
  }

  mostrarBotonVolver() {
    fill(50, 50, 50, 220);
    rect(width / 2 - 80, height - 70, 160, 40, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(18);
    text("Volver", width / 2, height - 50);
  }

  mousePressed() {
    // Si estamos dentro de un juego volver
    if (this.juegoActual != null) {
      if (
        mouseX > width / 2 - 80 &&
        mouseX < width / 2 + 80 &&
        mouseY > height - 70 &&
        mouseY < height - 30
        ) {
        this.juegoActual = null;
        this.estadoMenu = "principal";
      }
      return;
    }

    if (this.estadoMenu === "principal") {
      // JUEGO 1
      if (
        mouseX > width / 2 - 150 &&
        mouseX < width / 2 + 150 &&
        mouseY > 120 &&
        mouseY < 170
        ) {
        this.juegoActual = new Juego(4, this.jinxe, this.vieee,this.golpeFJi, this.dispa);
      }

      // JUEGO 2
      if (
        mouseX > width / 2 - 150 &&
        mouseX < width / 2 + 150 &&
        mouseY > 190 &&
        mouseY < 240
        ) {
        this.juegoActual = new Juego2(this.vieee, this.jinxe,this.golpeFJi, this.golpeF, this.dispa);
      }

      // REGLAS
      if (
        mouseX > width / 2 - 150 &&
        mouseX < width / 2 + 150 &&
        mouseY > 260 &
        mouseY < 310
        ) {
        this.estadoMenu = "reglas";
      }

      // CREDITOS
      if (
        mouseX > width / 2 - 150 &&
        mouseX < width / 2 + 150 &&
        mouseY > 330 &
        mouseY < 380
        ) {
        this.estadoMenu = "creditos";
      }
      return;
    }

    // Si estamos en REGLAS o CREDITOS para volver
    if (
      mouseX > width / 2 - 80 &&
      mouseX < width / 2 + 80 &&
      mouseY > height - 70 &&
      mouseY < height - 30
      ) {
      this.estadoMenu = "principal";
    }
  }
}
