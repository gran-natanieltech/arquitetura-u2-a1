import test from "node:test";
import assert from "node:assert/strict";
import { executarTurno, RoboRuim } from "./antes.js";
import {
  descansar,
  executarTrabalho,
  fazerRefeicao,
  humano,
  robo,
} from "./depois.js";

test("ISP: a interface ampla exige métodos sem sentido", () => {
  assert.throws(() => executarTurno(new RoboRuim()), /Robôs não comem/);
});

test("ISP: clientes usam apenas as capacidades necessárias", () => {
  assert.equal(executarTrabalho(robo), "trabalhando");
  assert.equal(executarTrabalho(humano), "trabalhando");
  assert.equal(fazerRefeicao(humano), "comendo");
  assert.equal(descansar(humano), "dormindo");
});
