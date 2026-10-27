export class Aplicacao {
  constructor(geradorPdf) {
    this.geradorPdf = geradorPdf;
  }

  gerarRelatorio(dados) {
    return this.geradorPdf.gerar(dados);
  }
}

export class AdaptadorBibliotecaPdf {
  constructor(bibliotecaPdf) {
    this.bibliotecaPdf = bibliotecaPdf;
  }

  gerar(dados) {
    return this.bibliotecaPdf
      .criarDocumento()
      .adicionarTexto(dados)
      .exportar();
  }
}
