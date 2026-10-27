function validarItens(itens) {
  if (!Array.isArray(itens) || itens.length === 0) {
    throw new Error("Pedido vazio");
  }
  if (itens.some((item) => item.preco < 0 || item.quantidade < 0)) {
    throw new Error("Item inválido");
  }
}

function calcularTotal(itens) {
  return itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

export function totalDoPedidoRefatorado(itens) {
  validarItens(itens);
  return `R$ ${calcularTotal(itens).toFixed(2)}`;
}

export class CadastroCliente {
  constructor() {
    this.clientes = [];
  }

  cadastrar(cliente) {
    this.clientes.push(cliente);
    return cliente;
  }
}

export class CobrancaService {
  constructor() {
    this.cobrancas = [];
  }

  cobrar(cliente, valor) {
    const cobranca = { cliente, valor };
    this.cobrancas.push(cobranca);
    return cobranca;
  }
}

export class Notificador {
  constructor() {
    this.notificacoes = [];
  }

  notificar(cliente, mensagem) {
    const notificacao = { cliente, mensagem };
    this.notificacoes.push(notificacao);
    return notificacao;
  }
}

export class DescontoNatal {
  aplicar(valor) {
    return valor * 0.9;
  }
}

export class DescontoBlackFriday {
  aplicar(valor) {
    return valor * 0.7;
  }
}

export function calcularDesconto(estrategia, valor) {
  return estrategia.aplicar(valor);
}

export class Endereco {
  constructor({ rua, numero, cidade, cep }) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.cep = cep;
  }

  formatar() {
    return `${this.rua}, ${this.numero}, ${this.cidade}, ${this.cep}`;
  }
}

export function enderecoDeEntregaDepois(nome, endereco) {
  return `${nome}: ${endereco.formatar()}`;
}

export function normalizarTexto(texto) {
  return texto.trim().toLowerCase();
}

export function normalizarNomeDepois(nome) {
  return normalizarTexto(nome);
}

export function normalizarEmailDepois(email) {
  return normalizarTexto(email);
}

export class ItemPedido {
  constructor(preco, quantidade) {
    this.preco = preco;
    this.quantidade = quantidade;
  }

  subtotal() {
    return this.preco * this.quantidade;
  }
}

export class Pedido {
  constructor(itens) {
    this.itens = itens;
  }

  total() {
    return this.itens.reduce((total, item) => total + item.subtotal(), 0);
  }
}
