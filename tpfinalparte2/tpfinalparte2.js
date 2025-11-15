//https://youtu.be/3JSSUO7nueg
let master;
let Fmenu;
let Freglas;
let flechas;
let jinxeee;
let vieeee;
let elegir;
let Cancion;
let disparo;
let golpeFJinx;
let golpeFVi;

function preload() {
  Fmenu = loadImage ("assets/fondo-azul.jpg")
    Freglas = loadImage ("assets/fondo-violeta.jpg")
    flechas = loadImage ("assets/flechas-teclado.png")
    jinxeee = loadImage ("assets/jinx-pixel.png")
    vieeeee = loadImage ("assets/vi-pixel.png")
    elegir = loadImage ("assets/jinx-vi-juntas.jpeg")
    Cancion = loadSound ('assets/Cancion.mp3');
  disparo = loadSound ('assets/disparo.mp3');
  golpeFJinx = loadSound ('assets/golpeFinalJ.mp3');
  golpeFVi = loadSound ('assets/golpeFinalV.mp3');
}

function setup() {
  createCanvas(640, 480);
  disparo.setVolume(0.8);
  golpeFJinx.setVolume(0.8);
  golpeFVi.setVolume(0.8);
  Cancion.setLoop(true);
  Cancion.setVolume(0.6);
  master = new MasterClass(Fmenu, Freglas, flechas, jinxeee, vieeeee, elegir, disparo, golpeFJinx, golpeFVi);
}

function draw() {
  background(220);
  if (master) {
    master.dibujar();
  }
}

function mousePressed() {
  if (!Cancion.isPlaying()) {
    Cancion.play();
  }
  if (master && master.mousePressed) {
    master.mousePressed();
  }
}

function keyPressed() {
  if (master && master.juegoActual && typeof master.juegoActual.teclaP === "function") {
    master.juegoActual.teclaP(keyCode);
  }
}

console.log(master, master.juegoActual);
