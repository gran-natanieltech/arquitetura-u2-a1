# Exercícios

Os exercícios são **exemplos adicionais** para praticar os conceitos da Unidade 2 · Aula 1.

## 1. Diagnostique o módulo

Considere uma classe `SistemaLoja` com métodos para validar CPF, calcular frete, persistir pedidos e enviar e-mail.

- Que responsabilidades podem mudar por motivos diferentes?
- Que módulos coesos você extrairia?
- Descreva a interface estável de cada módulo em uma frase.

## 2. Classifique o acoplamento

Classifique cada situação como conteúdo, comum, controle ou dados:

1. Um módulo modifica diretamente uma lista privada de outro.
2. Dois módulos escrevem na mesma variável global.
3. Uma função recebe um booleano que escolhe qual fluxo interno executar.
4. Um módulo chama `calcularFrete(endereco, peso)`.

## 3. Refatore com segurança

Escolha um smell em [`exemplos/smells/`](../exemplos/smells/). Rode os testes, faça uma mudança pequena, rode novamente e registre qual comportamento foi preservado. Experimente também reverter a mudança e confirmar que os testes continuam verdes.

## 4. Extensão sem modificação

Adicione uma estratégia de desconto sem editar a implementação existente de `aplicarDesconto`. Escreva um teste para a nova estratégia e execute `npm test`.
