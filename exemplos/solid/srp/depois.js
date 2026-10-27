export class Funcionario {
  constructor({ nome, salario }) {
    this.nome = nome;
    this.salario = salario;
  }
}

export class CalculadoraSalario {
  calcular(funcionario) {
    return funcionario.salario;
  }
}

export class RelatorioPdfGenerator {
  gerar(funcionario) {
    return `Relatório de ${funcionario.nome}`;
  }
}

export class FuncionarioRepository {
  constructor(storage) {
    this.storage = storage;
  }

  salvar(funcionario) {
    return this.storage.salvar({
      nome: funcionario.nome,
      salario: funcionario.salario,
    });
  }
}
