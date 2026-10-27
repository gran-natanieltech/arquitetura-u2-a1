import test from "node:test";
import assert from "node:assert/strict";
import {
  definirDimensoesECalcularArea,
  Quadrado as QuadradoAntes,
  Retangulo as RetanguloAntes,
} from "./antes.js";
import {
  areaDaForma,
  Quadrado,
  Retangulo,
} from "./depois.js";

test("LSP: o exemplo anterior evidencia a quebra de substituição", () => {
  assert.equal(definirDimensoesECalcularArea(new RetanguloAntes(0, 0)), 20);
  assert.equal(definirDimensoesECalcularArea(new QuadradoAntes(0, 0)), 25);
});

test("LSP: formas independentes respeitam seus contratos de área", () => {
  assert.equal(areaDaForma(new Retangulo(4, 5)), 20);
  assert.equal(areaDaForma(new Quadrado(5)), 25);
});
