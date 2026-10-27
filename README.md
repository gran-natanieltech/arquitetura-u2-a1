# Unidade 2 · Aula 1 — Modularidade, SOLID, Refatoração e Reuso

Projeto didático sobre modularidade, acoplamento, coesão, princípios SOLID, refatoração e reuso. O conteúdo é baseado em **Unidade 2 · Aula 1 — Prof. Nataniel Paiva**. Os exemplos de código em JavaScript são **exemplos adicionais** para tornar os conceitos executáveis.

## Por onde começar

1. [Modularidade](docs/01-modularidade.md)
2. [Acoplamento e coesão](docs/02-acoplamento-e-coesao.md)
3. [Princípios SOLID](docs/03-solid.md)
4. [Refatoração e code smells](docs/04-refatoracao-e-smells.md)
5. [Reuso responsável](docs/05-reuso.md)
6. [Glossário](glossario.md)

Os diagramas Mermaid também estão disponíveis como arquivos-fonte em [`diagramas/`](diagramas/). Cada exemplo de código tem uma versão problemática, uma versão refatorada e testes que verificam o comportamento.

## Executar os testes

Requer Node.js 18 ou superior. Não é necessário instalar dependências:

```sh
npm test
```

Para executar um conjunto específico:

```sh
node --test exemplos/solid/srp
```

## Diagnóstico rápido

- [ ] Consigo descrever a responsabilidade do módulo em uma frase?
- [ ] Uma mudança interna pode ocorrer sem obrigar seus consumidores a mudar?
- [ ] A classe tem um único motivo de mudança, ligado a um ator/stakeholder?
- [ ] Os módulos trocam apenas os dados de que precisam, por interfaces estáveis?
- [ ] Alterar uma classe obriga a retestar muitas outras ou causa bugs sem relação?
- [ ] A dependência externa está encapsulada atrás de uma abstração própria?

## Estrutura

```text
docs/                 explicações, exemplos e diagramas
diagramas/            fontes Mermaid individuais
exemplos/solid/        antes, depois e testes de cada princípio
exemplos/smells/       refatorações de code smells e testes
exemplos/reuso/        adaptador de biblioteca e testes
exercicios/            atividades de diagnóstico e refatoração
```

## Referência

Conteúdo baseado em **Unidade 2 · Aula 1 — Prof. Nataniel Paiva**. Linguagem, nomes de classes e exemplos de implementação são exemplos adicionais; os conceitos e critérios apresentados na aula são a referência principal.
