export class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  setLargura(largura) {
    this.largura = largura;
  }

  setAltura(altura) {
    this.altura = altura;
  }

  area() {
    return this.largura * this.altura;
  }
}

export class Quadrado extends Retangulo {
  setLargura(largura) {
    this.largura = largura;
    this.altura = largura;
  }

  setAltura(altura) {
    this.largura = altura;
    this.altura = altura;
  }
}

export function definirDimensoesECalcularArea(retangulo) {
  retangulo.setLargura(4);
  retangulo.setAltura(5);
  return retangulo.area();
}
