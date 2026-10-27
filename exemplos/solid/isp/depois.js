export function executarTrabalho(trabalhavel) {
  return trabalhavel.trabalhar();
}

export function fazerRefeicao(alimentavel) {
  return alimentavel.comer();
}

export function descansar(descansavel) {
  return descansavel.dormir();
}

export const robo = {
  trabalhar: () => "trabalhando",
};

export const humano = {
  trabalhar: () => "trabalhando",
  comer: () => "comendo",
  dormir: () => "dormindo",
};
