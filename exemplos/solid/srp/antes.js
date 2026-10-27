export class FuncionarioRuim {
  constructor({ nome, salario }) {
    this.nome = nome;
    this.salario = salario;
  }

  calcularSalario() {
    return this.salario;
  }

  gerarRelatorioPdf() {
    return `Relatório de ${this.nome}`;
  }

  salvarNoBanco(repository) {
    return repository.salvar({ nome: this.nome, salario: this.salario });
  }
}
