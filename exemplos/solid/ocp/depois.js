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

export class DescontoNovoCliente {
  aplicar(valor) {
    return valor * 0.95;
  }
}

export function aplicarDesconto(estrategia, valor) {
  return estrategia.aplicar(valor);
}
