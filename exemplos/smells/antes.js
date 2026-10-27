export function totalDoPedidoLongo(itens) {
  if (!Array.isArray(itens) || itens.length === 0) {
    throw new Error("Pedido vazio");
  }
  let total = 0;
  for (const item of itens) {
    if (item.preco < 0 || item.quantidade < 0) {
      throw new Error("Item inválido");
    }
    total += item.preco * item.quantidade;
  }
  return `R$ ${total.toFixed(2)}`;
}

export class SistemaLojaGrande {
  constructor() {
    this.clientes = [];
    this.cobrancas = [];
    this.notificacoes = [];
  }

  cadastrar(cliente) {
    this.clientes.push(cliente);
    return cliente;
  }

  cobrar(cliente, valor) {
    const cobranca = { cliente, valor };
    this.cobrancas.push(cobranca);
    return cobranca;
  }

  notificar(cliente, mensagem) {
    const notificacao = { cliente, mensagem };
    this.notificacoes.push(notificacao);
    return notificacao;
  }
}

export function calcularDescontoCondicional(tipo, valor) {
  if (tipo === "natal") return valor * 0.9;
  if (tipo === "black-friday") return valor * 0.7;
  return valor;
}

export function enderecoDeEntregaAntes(nome, rua, numero, cidade, cep) {
  return `${nome}: ${rua}, ${numero}, ${cidade}, ${cep}`;
}

export function normalizarNomeAntes(nome) {
  return nome.trim().toLowerCase();
}

export function normalizarEmailAntes(email) {
  return email.trim().toLowerCase();
}

export function totalDoPedidoAntes(itens) {
  return itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
}
