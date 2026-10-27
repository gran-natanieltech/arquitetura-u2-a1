export class RoboRuim {
  trabalhar() {
    return "trabalhando";
  }

  comer() {
    throw new Error("Robôs não comem");
  }

  dormir() {
    throw new Error("Robôs não dormem");
  }
}

export function executarTurno(trabalhador) {
  trabalhador.trabalhar();
  trabalhador.comer();
  trabalhador.dormir();
}
