import test from "node:test";
import assert from "node:assert/strict";
import {
  calcularDescontoCondicional,
  enderecoDeEntregaAntes,
  normalizarEmailAntes,
  normalizarNomeAntes,
  SistemaLojaGrande,
  totalDoPedidoAntes,
  totalDoPedidoLongo,
} from "./antes.js";
import {
  CadastroCliente,
  calcularDesconto,
  CobrancaService,
  DescontoBlackFriday,
  DescontoNatal,
  enderecoDeEntregaDepois,
  Endereco,
  ItemPedido,
  normalizarEmailDepois,
  normalizarNomeDepois,
  Notificador,
  Pedido,
  totalDoPedidoRefatorado,
} from "./depois.js";

test("método longo: extração preserva formatação e validação", () => {
  const itens = [{ preco: 10, quantidade: 2 }, { preco: 2.5, quantidade: 1 }];
  assert.equal(totalDoPedidoRefatorado(itens), totalDoPedidoLongo(itens));
  assert.throws(() => totalDoPedidoRefatorado([]), /Pedido vazio/);
  assert.throws(() => totalDoPedidoRefatorado([{ preco: -1, quantidade: 1 }]), /Item inválido/);
});

test("classe grande: dividir responsabilidades preserva operações", () => {
  const antes = new SistemaLojaGrande();
  const cadastro = new CadastroCliente();
  const cobranca = new CobrancaService();
  const notificador = new Notificador();
  const cliente = { id: 1 };

  assert.deepEqual(cadastro.cadastrar(cliente), antes.cadastrar(cliente));
  assert.deepEqual(cobranca.cobrar(cliente, 50), antes.cobrar(cliente, 50));
  assert.deepEqual(notificador.notificar(cliente, "Pedido enviado"), antes.notificar(cliente, "Pedido enviado"));
});

test("condicionais por tipo: estratégias preservam regras", () => {
  assert.equal(calcularDesconto(new DescontoNatal(), 100), calcularDescontoCondicional("natal", 100));
  assert.equal(calcularDesconto(new DescontoBlackFriday(), 100), calcularDescontoCondicional("black-friday", 100));
});

test("lista longa de parâmetros: objeto de valor preserva endereço", () => {
  const endereco = new Endereco({ rua: "Rua A", numero: 10, cidade: "Recife", cep: "50000-000" });
  assert.equal(enderecoDeEntregaDepois("Ana", endereco), enderecoDeEntregaAntes("Ana", "Rua A", 10, "Recife", "50000-000"));
});

test("duplicação: normalização compartilhada mantém os resultados", () => {
  assert.equal(normalizarNomeDepois(" Ana "), normalizarNomeAntes(" Ana "));
  assert.equal(normalizarEmailDepois(" ANA@EXEMPLO.COM "), normalizarEmailAntes(" ANA@EXEMPLO.COM "));
});

test("feature envy: mover subtotal para o item preserva o total", () => {
  const itensAntes = [{ preco: 12, quantidade: 2 }, { preco: 5, quantidade: 3 }];
  const pedido = new Pedido([new ItemPedido(12, 2), new ItemPedido(5, 3)]);
  assert.equal(pedido.total(), totalDoPedidoAntes(itensAntes));
});
