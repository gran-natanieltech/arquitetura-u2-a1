export class PedidoService {
  constructor(repository) {
    this.repository = repository;
  }

  salvar(pedido) {
    return this.repository.salvar(pedido);
  }
}

export class MySQLPedidoRepository {
  constructor(cliente) {
    this.cliente = cliente;
  }

  salvar(pedido) {
    return this.cliente.inserir(pedido);
  }
}
