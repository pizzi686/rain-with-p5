let muchasgotas = [];
let edificios = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 100; i++) {
    //por cada for instancio un nuevo objeto gota de la clase gotas y lo almaceno en un array
    gota = new gotas(random(width), random(8, 15));
    muchasgotas[i] = gota;
    edificio = new city(
      random(100, width / 10),
      random(height / 3),
      random(40)
    );
    edificios[i] = edificio;
  }
}

function draw() {
  background(0); //120,0,100);
  fill(1000, 1000, 1000);
  noStroke();
  createCity();
  create();
}
function create() {
  for (i = 0; i < 100; i++) {
    muchasgotas[i].show();
    muchasgotas[i].move();
    muchasgotas[i].repeat();
  }
}
function createCity() {
  for (i = 0; i < 10; i++) {
    edificios[i].show();
  }
}
