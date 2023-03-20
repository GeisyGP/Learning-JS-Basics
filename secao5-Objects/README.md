# Objetos

Reunir variáveis de características/definições em um objeto.

Sintaxe:
```
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true
    draw: function() {
        console.log("draw");
    }
};
```

Para acessá-lo podemos usar dot notation `circle.draw();`
Isso é o que é chamado de **Object-oriented Programing (OOP)** ou programação orientada a objetos. Nesse caso se existe uma função ligada ao objeto, chamamos ela de método.

Para não duplicar a lógica sempre que quiser criar objetos iguais, usa-se funções de fábrica ou construtoras: 

**Factory Function**:

```
function createCircle(radius){
    return {
        radius,
        draw() {
            console.log("draw");
        }
    };
}
```

**Constructor Function**:

>Escrita com notação de Pascal (OneTwo)

```
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const circle = new Circle(1);
```

Objetos são funções, no vscode os roxos são métodos e os azuis propriedades. Métodos:

`Circle.call({}, 1)` usa-se para chamar a função, em que o primeiro argumento define o alvo "this". É igual a `const another = new Circle(1);`

`Circle.apply({}, [1,2,3])` funciona como o call, mas usa-se um array como segundo argumento.


Usando tipos primitivos as variáveis são independentes, quando atribuída a outra copia-se o valor. Quando é usado um objeto, ele é armazenado em outro lugar na memória, e o endereço desse local da memória é armazenado dentro dessa variável de memória. Ou seja, duas variáveis acabam apontando para o mesmo local. Conclusão:

- Primitivos são copiados pelo valor
- Objetos são copiados por referência

## Clonar Objetos 

Pode ser feito usando loop for in:

```
const another = {};

for (let key in circle)
    another[key] = circle[key];
```

Porém essa abordagem já é antiga. Existe outra forma, que é através do método de atribuição:

```
const another = Object.assign({}, circle);
```
Ele vai pegar todas as propriedades do método no objeto de origem e copiá-las para o novo objeto. 

Além disso, existe outra forma mais simples e elegante de clonar um objeto, usando o operador de espalhamento:

```
const another = { ...circle };
```

**Garbage Collector** (coletor de lixo): encontra as variáveis/constantes que não são mais usadas e desaloca a memória que foi alocada para elas anteriormente. 


## Objetos Globais

Em [developer.mozill](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) é possível acessar várias documentações de JavaScript, incluindo objetos globais, como Math.

Uma string pode ser um tipo primitivo ou um objeto:
 
String primitive: `const message = "hi";`
String object: `const another = new String("hi");`

Em [developer.mozill](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) também é possível ver métodos de string e os caracteres de escape, como: `\n` que representa uma nova linha.

Outra forma, mais limpa de fazer isso é usando template literals: (duas crases) 
```
const message = `Hi ${name},

This is my message.`;
```

Em que `${name}` significa que a variável name vai aparecer ali.  

Outro objeto global é **Date**: `const now = new Date();` retorna a data e o horário atual.

> Os meses iniciam em 0, então 0 = janeiro e 11 = dezembro.
