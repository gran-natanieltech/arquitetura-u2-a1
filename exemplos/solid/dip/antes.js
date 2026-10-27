export class PedidoServiceRuim {
  salvar(pedido) {
    const mysql = new MySQL();
    return mysql.inserir(pedido);
  }
}

class MySQL {
  inserir(pedido) {
    return { ...pedido, salvo: true };
  }
}
