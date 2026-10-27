export class AplicacaoRuim {
  gerarRelatorio(bibliotecaPdf, dados) {
    return bibliotecaPdf.criarDocumento().adicionarTexto(dados).exportar();
  }
}
