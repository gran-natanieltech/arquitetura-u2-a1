export function aplicarDescontoPorTipo(tipo, valor) {
  if (tipo === "natal") return valor * 0.9;
  if (tipo === "black-friday") return valor * 0.7;
  if (tipo === "novo-cliente") return valor * 0.95;
  throw new Error(`Tipo de desconto desconhecido: ${tipo}`);
}
