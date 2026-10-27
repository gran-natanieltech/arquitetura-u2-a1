export class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  area() {
    return this.largura * this.altura;
  }
}

export class Quadrado {
  constructor(lado) {
    this.lado = lado;
  }

  area() {
    return this.lado ** 2;
  }
}

export function areaDaForma(forma) {
  return forma.area();
}
