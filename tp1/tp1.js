// https://youtu.be/ezzPcMeQLNA


let refe;
let velocidadRotacion = 0;
let anguloBase = 0;
let areaResaltada = 30;

function preload(){
  refe = loadImage("assets/refe.jpg");
}


function setup() {
  createCanvas(800, 400);
  refe.resize(400, 400);
  noStroke();
  rectMode(CENTER);
}



function draw() {
  background(255);
  image(refe, 0, 0, 400, 400);
  translate(600, height / 2);
  let circulos = 40;        
  let cuadradosxcir = 60;   
  let espacio = 4;          
  anguloBase += velocidadRotacion;
  console.log(mouseX, mouseY);
  
  for (let anillo =1; anillo< circulos;anillo++) {
    let radio= anillo* espacio;
    circulo(anillo,radio, cuadradosxcir, anguloBase);
  }
  
  
}


function circulo(anillos,radio,cuadrados,rotarTodo) {
  let angulo = TWO_PI/ cuadrados;

  for (let i = 0; i < cuadrados;i++) {
    let angulo2 = i* angulo + anillos * rotarTodo;
    let x = cos(angulo2) * radio;
    let y = sin(angulo2)* radio;
    let tamaño =(angulo * radio * 0.9);

    let negro = (i + anillos) % 2 === 0;
    let distanciaAlMouse= dist(mouseX - 600, mouseY - height / 2, x, y);
    let resaltar= distanciaAlMouse <areaResaltada;

    dibujarCuadrado(x, y,tamaño,angulo2, negro,resaltar);
  }
  
  
  
}

function dibujarCuadrado(x, y,tamaño,rotacion, negro, resaltar) {
  push();
  translate(x, y);
  rotate(rotacion);

  if (resaltar) {
    fill(random(255),random(255),random(255));
  } else if (negro) {
    fill(0);
  } else {
    fill(255);
  }
  
  
  rect(0,0,tamaño, tamaño);
  pop();
  
  
  
}


let velocidad = 0.01;
function keyPressed() {
  if (key==='a'|| key ==='A') {
    velocidadRotacion= -velocidad;
  } else if (key ==='d'||key ==='D') {
    velocidadRotacion =velocidad;
  } else if (key==='+') {
    areaResaltada += 5;
  } else if (key === '-') {
    areaResaltada -=5;
  }
  
   
}

function mousePressed() {
  velocidadRotacion = 0;
  anguloBase = 0;
}
