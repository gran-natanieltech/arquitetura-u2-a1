import test from "node:test";
import assert from "node:assert/strict";
import { AplicacaoRuim } from "./antes.js";
import { AdaptadorBibliotecaPdf, Aplicacao } from "./depois.js";

function criarBibliotecaFalsa() {
  return {
    criarDocumento() {
      let texto = "";
      return {
        adicionarTexto(valor) {
          texto = valor;
          return this;
        },
        exportar() {
          return `PDF: ${texto}`;
        },
      };
    },
  };
}

test("reuso: interface própria mantém comportamento e oculta a biblioteca", () => {
  const biblioteca = criarBibliotecaFalsa();
  const antes = new AplicacaoRuim().gerarRelatorio(biblioteca, "Relatório");
  const depois = new Aplicacao(new AdaptadorBibliotecaPdf(biblioteca)).gerarRelatorio("Relatório");

  assert.equal(depois, antes);
  assert.equal(depois, "PDF: Relatório");
});

test("reuso: a aplicação pode receber outro gerador sem conhecer a biblioteca", () => {
  const aplicacao = new Aplicacao({ gerar: (dados) => `alternativo: ${dados}` });
  assert.equal(aplicacao.gerarRelatorio("Relatório"), "alternativo: Relatório");
});
