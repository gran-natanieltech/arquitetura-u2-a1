import test from "node:test";
import assert from "node:assert/strict";
import { aplicarDescontoPorTipo } from "./antes.js";
import {
  aplicarDesconto,
  DescontoBlackFriday,
  DescontoNatal,
  DescontoNovoCliente,
} from "./depois.js";

test("OCP: estratégias preservam os descontos existentes", () => {
  const casos = [
    ["natal", new DescontoNatal()],
    ["black-friday", new DescontoBlackFriday()],
    ["novo-cliente", new DescontoNovoCliente()],
  ];

  for (const [tipo, estrategia] of casos) {
    assert.equal(aplicarDesconto(estrategia, 100), aplicarDescontoPorTipo(tipo, 100));
  }
});

test("OCP: uma estratégia nova pode ser adicionada sem editar o aplicador", () => {
  const descontoFidelidade = { aplicar: (valor) => valor - 10 };
  assert.equal(aplicarDesconto(descontoFidelidade, 100), 90);
});
