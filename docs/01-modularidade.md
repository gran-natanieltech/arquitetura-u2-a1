# 1. Modularidade

Modularidade é a divisão do sistema em módulos — classes, pacotes, componentes ou serviços — relativamente independentes. Um módulo bem delimitado pode ser entendido, desenvolvido, testado e corrigido sem exigir conhecimento do sistema inteiro. Modularidade é uma questão de grau: dividir o código por conveniência, sem limites claros, não basta.

## Ocultamento de informação

Pelo critério de Parnas, cada módulo deve encapsular uma decisão de projeto que provavelmente muda e expor apenas uma interface estável. Assim, os detalhes internos podem evoluir sem obrigar os consumidores a conhecer ou acompanhar a mudança.

**Exemplo adicional:** um módulo de persistência pode esconder se os dados são gravados em arquivo ou em banco. Os consumidores dependem de operações como `salvar(pedido)`, e não dos detalhes do armazenamento.

```mermaid
flowchart LR
    C[Consumidor] -->|interface estável| M[Módulo de pedidos]
    M --> D[Detalhes internos substituíveis]
```

```js
// Antes: o consumidor conhece detalhes do armazenamento.
const arquivo = abrirArquivo("pedidos.json");
arquivo.escrever(JSON.stringify(pedido));

// Depois: o módulo esconde o mecanismo de armazenamento.
pedidoRepository.salvar(pedido);
```

## Três perguntas para avaliar um módulo

1. O módulo tem uma única razão de mudança?
2. Seus detalhes internos podem mudar sem alterar quem o usa?
3. Seu nome e sua responsabilidade podem ser descritos em uma frase?

Se as respostas forem “não”, reveja os limites e a interface antes de simplesmente criar mais módulos.
