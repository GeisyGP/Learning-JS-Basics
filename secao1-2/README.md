# Introdução

- JavaScript pode ser executado em um navegador ou no node.
- Em um arquivo html, "!" + "tab", gera um boiler plate básico. 

Para escrever o código JavaScript, precisamos de um elemento de script, existem dois lugares: head ou body. A melhor prática é colocar no final de body, após todos os elementos.

## Resumo

- Ao declarar uma variável, não é mais usado `var`, com o ES6 usa-se `let`;

|Tipos primitivos||
|--|--|
|String|"Palavra"|
|Number|15|
|Boolean|true|
|undefined|(se não declarada por padrão já é indefinida)| 
|null|null (limpar o valor da variável)|
|symbol||

Linguagens podem ser estáticas ou dinâmicas. Em uma **linguagem dinâmica** como JavaScript, o tipo de uma variável pode mudar em tempo de execução.

|Reference Types|Descrição|
|--|--|
|Object|Características, como nome, idade...|
|Array|Lista de itens|
|Function|Realiza uma tarefa ou calcula um valor|

Para declarar um objeto, usa-se chaves, como:
```
let person = {
    name: "Geisy",
    age: 19
};
```
Para alterar alguma das variáveis existem duas maneiras. 
- "Dot Notation" em que usa-se `person.name`;
- "Bracket Notation" em que usa-se `person["name"]`.

Em arrays o tamanho é dinâmico e pode conter diferentes tipos. 

Em funções o parâmetro é definido na função e argumento quando a chama.