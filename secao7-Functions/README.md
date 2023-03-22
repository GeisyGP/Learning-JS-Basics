# Funções

A sintaxe para declarar uma função é conhecida `function example() {}`. Porém, podemos declarar como uma expressão: `let run = function() {};` Nesse caso, em que não tem nome é uma **Anonymous Function Expression** e quando nomeada **Named Function Expression**. Ela pode ser chamada assim como outras funções `run()`.

- Uma função com sintaxe de declaração pode ser chamada antes no código, pois o JS "move" todas as declarações de função para o topo, isso se chama **Hoisting**.
- Já uma função definida como expressão só pode ser chamada depois de definida. É como querer imprimir um x que só é declarado depois. 

## Parâmetros

Uma função tem um objeto chamado **arguments**. Quando passamos como argumento, só são usadas as variáveis "requisitadas", mas todas fazem parte do objeto. Por exemplo:
```
function soma (a, b) {
    return a+b;
}
```
Se for passado mais de dois argumentos, eles farão parte do objeto, mas não serão somados. Para somar todos, pode-se usar um loop iterando sobre o objeto: 
```
function sum(){
    let total = 0;
    for (let value of arguments){
        total += value;
    }
    return total;
}
```

Existem também o operador **Rest**. Quando declarado como parâmetro da função `function sum (...args) {}` ele irá formar um array com todos os argumentos. Para somar todos os argumentos pode ser usado o método reduce. Dessa forma, reduz o código:
```
function sum(...args){
    return args.reduce((a, b) => a + b);
}
```
Se tiver mais de um parâmetro, o operadores rest precisa ser o último.

Caso queira usar um parâmetro com um valor padrão, pode defini-lo:
`function myFunction(valor, taxa = 3.5, anos = 5) {}`

Porém quando um é definido como padrão, todos os que vem depois também tem que ser. 

## Métodos, comandos e mais:

**Getters** são usados para acessar propriedades de um objeto e **Setter** para modifiCá-las, como no exemplo:
```
const person = {
    firstName: "Maria",
    lastName: "Silva",
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firtName = parts[0];
        this.lastName = parts[1];        
    }
};
    person.fullName = "João Souza";
```

Se nesse exemplo fosse atribuído um valor diferente de string, o código apresentaria erro. Para evitar erros, pode adicionar um `if (typeof value != "string") return;` logo no ínicio de set. Assim, será mostrado o valor inicial quando não for string.

Caso ainda queira que apareça um erro, pode usar uma exceção, retirando "return" e adicionando-a na linha logo abaixo. Além disso, precisa criar um bloco **try** onde pode ser lançado a exceção (nesse caso na definição de um novo nome) e um **catch** para emitir o erro. 

Existe diferença entre erro e exceção: 
- Erro: `const e = new Error();`
- Exceção: `throw e;`

### Por que evitar declarar com "var"?

Em JavaScript, quando declarado uma variável como var o seu escopo não se limita ao bloco de código (como if ou for), ela é limitada à função em que é definida. Além disso, no navegador existe um objeto chamado "Window" que possui muitas propriedades e métodos. Uma variável declarada como var é incluída como propriedade de Window, logo, caso uma biblioteca de terceiros usar o mesmo nome de variável, ela vai acabar sendo substituída. 

### O que é "this"?

This faz referência ao objeto que está executando a função atual. Mas quando chama uma função usando o operador new (funções construtoras), this faz referência a um objeto vazio.

> Uma função declarada dentro de um objeto é um método.

Quando é chamado this dentro de um método ele vai referenciar window. Para referenciar o objeto podemos passar como segundo parâmetro "this":
```
const video = {
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};
```

Alterar o valor "this" em uma função:

Para não precisar usar this como segundo parâmetro, podemos declarar antes de forEach:
```
showTags(){
    const self = this;
    ...
}
```
> Não é recomendado usar, mas pode ser visto em códigos

Outra forma é usando os métodos call, apply e bind para chamar/modificar uma função. Com uma função `function myFunction(a, b) {}`

A diferença entre eles é:
- `myFunction.call({ name: "Ana" }, 1, 2);`
- `myFunction.apply({ name: "Ana" }, [1, 2]);`
- `myFunction.bind({ name: "Ana" })();`

O último, não chama a função myFunction, ele retorna uma nova função e a define para apontar para o objeto permanentemente. 

É possível então adicionar o método bind no objeto anterior para this referenciar a função ou, a opção mais recomendada, usar função de seta. 