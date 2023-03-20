# Control Flow

## Loops:
- for

Sintaxe: (variavel de loop; condição; expressão de incremento)
```
for (let i = 0; i < 5; i++) {
   console.log(i);
}
```

- while
```
let i = 0;

while (i < 5){
    console.log(i);
    i++;
}
```

- do-while
```
let i = 7;
do {
    console.log(i);
    i++;
} while (i < 5);
```
A diferença é que do-while é executado sempre pelo menos uma vez, ou seja, mesmo que a condição for falsa, ele vai ser executado uma vez. 

- for in

Ideal para objetos.
```
const person = {
    name: "Maria",
    age: 20
};

for (let key in person)
    console.log(key, person[key]);
```

- for of

Ideal para iteraveis, como arrays e mapas.
```
const colors = ["red", "green", "blue"];

for (let color of colors){
    console.log(color);
}
```

## Outros:

- Break
  
Quando deseja "pular fora" do loop.
```
let i = 0;

while (i < 5){
    if (i === 5) break; 

    console.log(i);
    i++;
}
```

- Continue
  
Pula para o início do loop e continua a execução.
```
let i = 0;

while (i < 5){
    if (i % 2 === 0) {
        i++;
        continue;
    } 

    console.log(i);
    i++;
}
```
> Não é recomendado usar.

A função `Math.floor(1.4)`, arredonda para inteiro.