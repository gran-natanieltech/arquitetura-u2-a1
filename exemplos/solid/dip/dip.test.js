import test from "node:test";
import assert from "node:assert/strict";
import { PedidoServiceRuim } from "./antes.js";
import { MySQLPedidoRepository, PedidoService } from "./depois.js";

test("DIP: o serviço anterior salvava no banco concreto", () => {
  assert.deepEqual(new PedidoServiceRuim().salvar({ id: 1 }), { id: 1, salvo: true });
});

test("DIP: o serviço depende de uma abstração injetada", () => {
  const gravados = [];
  const repositoryFalso = {
    salvar: (pedido) => {
      gravados.push(pedido);
      return { ...pedido, salvo: true };
    },
  };
  const service = new PedidoService(repositoryFalso);

  assert.deepEqual(service.salvar({ id: 2 }), { id: 2, salvo: true });
  assert.deepEqual(gravados, [{ id: 2 }]);
});

test("DIP: o adaptador MySQL implementa o contrato consumido pelo serviço", () => {
  const cliente = { inserir: (pedido) => ({ ...pedido, idBanco: 42 }) };
  const service = new PedidoService(new MySQLPedidoRepository(cliente));
  assert.deepEqual(service.salvar({ id: 3 }), { id: 3, idBanco: 42 });
});
