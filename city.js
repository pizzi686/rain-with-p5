class city {
  constructor(ancho, alto, colorE) {
    this.altoedificio = alto; //random(100)
    this.anchoedificio = ancho; //random(70)
    this.posx = random(width);
    this.posy = height - this.altoedificio;
    this.coloredificio = colorE;
  }

  show() {
    fill(this.coloredificio);
    rect(this.posx, this.posy, this.anchoedificio, this.altoedificio);
  }
}
