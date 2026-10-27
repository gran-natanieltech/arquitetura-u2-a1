import test from "node:test";
import assert from "node:assert/strict";
import { FuncionarioRuim } from "./antes.js";
import {
  CalculadoraSalario,
  Funcionario,
  FuncionarioRepository,
  RelatorioPdfGenerator,
} from "./depois.js";

test("SRP: extrair responsabilidades preserva os resultados", () => {
  const funcionario = new Funcionario({ nome: "Ana", salario: 5000 });
  const gravadosAntes = [];
  const gravadosDepois = [];
  const storageAntes = { salvar: (registro) => gravadosAntes.push(registro) };
  const storageDepois = { salvar: (registro) => gravadosDepois.push(registro) };
  const antes = new FuncionarioRuim(funcionario);
  const repository = new FuncionarioRepository(storageDepois);

  assert.equal(antes.calcularSalario(), new CalculadoraSalario().calcular(funcionario));
  assert.equal(antes.gerarRelatorioPdf(), new RelatorioPdfGenerator().gerar(funcionario));
  assert.equal(antes.salvarNoBanco(storageAntes), repository.salvar(funcionario));
  assert.deepEqual(gravadosAntes, gravadosDepois);
  assert.deepEqual(gravadosDepois, [{ nome: "Ana", salario: 5000 }]);
});
