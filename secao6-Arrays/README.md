# Arrays

Mesmo que declarado como uma constante, podemos modificar um array, adicionando no fim, ínicio ou meio.

Para adicionar no fim, pode-se usar o método push, exemplo: `numbers.push(5, 6);`.

Para adicionar no ínicio, existe o método unshift, exemplo: `numbers.unshift(1, 2);` 
Ele move todos para direita e adiociona a esquerda.

Para adicionar no meio, existe o método splice, exemplo:
`numbers.splice(2, 0, "a", "b");`
Em que 2 é o índice de onde quer adiocionar e 0 se quer excluir. 

## Como encontrar elementos

### Primitivos:

Para encontrar podemos usar **indexOf**, como no exemplo `numbers.indexOf("a");`. Se o valor existir no array retornará seu índice, se não "-1". É possível adicionar um segundo parametro, que é a partir de qual índice deve procurar. 

Existem também **lastIndexOf**, que encontra o último índice do valor informado. E também, **includes** que retorna true ou false.

### Objetos:

Para encontrar existe o método **find**, como no exemplo:
```
const courses = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
];

const course = courses.find(function(course){
    return course.name === "a";
}); 
```
A função de predicado é chamada de função de retorno de chamada, porque ela é chamada de volta como parte da localização de um elemento. 

Além desse, exite o **findIndex**, que retorna o índice do valor procurado. 

No ES6 há um forma mais limpa de escrever esse mesmo código, usando função de seta:

```
const course = courses.find(course => course.name === "a"); 
```
Nesse caso, como era apenas uma linha, é possível tirar as chaves, deixando tudo assim em uma linha só. 

## Como remover elementos

Assim como adicionar, é possível remover elementos do fim, ínicio e meio.

Para remover do fim, pode-se usar o método **pop**, ele remove e retorna o elemento. Assim também funciona com **shift** que remove do ínicio. E para remover no meio, usa-se o método **splice**, informando o índice do elemento e quantos elementos quer remover. 

Também é possível esvaziar um array. Isso pode ser feito das seguintes formas:
- Quando não é um array constante, atribui a vazio. Porém quando outro array faz referência a ele, continua existindo na memória.
  - `numbers = [];`
- Usar o método length. Assim removerá todos os elementos:
  - `numbers.length = 0;`
- Usar o método splice. Começa a partir do primeiro e remove a quantidade de elementos que tem no array.
  - `numbers.splice(0, numbers.length);`
- Usar o método pop. Colocar em um loop e continuar chamando o método até que tenha um elemento no array (maior gasto de desempenho se array for grande).
  - ```
  while (numbers.length > 0)
    numbers.pop();
  ```

## Combined e Slice

Para juntar dois arrays em um só pode-se usar `array1.concat(array2)`. 
Para chamar apenas um pedaço do array pode-se usar `array.slice(2);`. Em que separa a partir do índice 2. 

Existe outra forma de combinar, usando o operador de propagação do ES6: `const combined = [...first, ...second];` 

## Loops

Anteriormente foi visto que pode-se usar for of para iterar um array. Existe o forEach que também faz isso, da seguinte forma:
```
number.forEach(numbers => console.log(number)); 
```

## Joining, Sorting e Testing

Para ligar elementos pode-se usar o método join: `const joined = numbers.join(",");` o resultado será como `1,2,3`.

> Sempre que tiver um "?" significa que o parâmetro é opcional.

O método **split** serve para separar strings: `const parts = message.split(" ");`. Assim ele retorna um array, divindo a mensagem nos espaços em branco (por palavra). Depois pode juntar novamente: `parts.join("-");`. Isso costuma ser usado para criar urls, pois o resultado fica como "essa-é-uma-mensagem". 

Para classificar/ordenar um array existe o método sort: `numbers.sort();`. Ele transforma em um array e ordena. Também é possível ordenar na ordem reversa: `numbers.reverse();`.

Quando é um array de objetos, isso fica um pouco mais difícil. Se queremos ordenar é necessário usar if para determinar qual é o maior. 

Se for string a ordem é determinada pela tabela ASCII, onde uma letra maiúscula vem antes de uma minúscula. Então, podemos tirar o critério de case sensitive, colocano tudo em letra maiúscula: `const nameA = a.name.toUpperCase();`, ou em letra minúscula: `const nameA = a.name.toLowerCase();`.

> Em Windows, ,"ctrl" + "d" consegue alterar palavras iguais ao mesmo tempo.

Para testar os elementos de um array pode-se usar **every**:
```
const allPositive = numbers.every(function(value){
  return value >= 0;
});
```
Esse método vai percorrer todos os elementos do array e assim que encontrar um que não corresponde ao critério vai encerrar a pesquisa, retornando um valor booleano.

Já para verificar se tem pelo menos um elemento que satisfaz o critério existe o método **some** (só trocando `every` por `some`).
 
> Every e some não funcionam em alguns navegadores antigos.

## Filtering, Mapping e Reducing

Para filtrar elementos existe o método filter:
```
const filtered = numbers.filter(n => n >= 0);
```
Isso retornará apenas os números positivos.

Para mapear cada elemento do array para outra coisa, existe o método **map**. Por exemplo, se queremos tranformar em string:

``` 
const numbers = [1, 2, -1, 3];

const items = numbers.map(n => "<li>" + n + "<li>")

const html = "<ul>" + items.join("") + "</ul>";

console.log(html);
```

>Para não ter vírgulas separando os elementos: `.join("");`

Caso fossemos somar valores de um carrinho de compras (um array), poderiamos usar um for com `soma += n;`. Mas existe outra forma mais "elegante" de fazer isso, utilizando o método **reduce**. Ficaria assim:
```
const soma = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
```
Em que 0 é o valor inicial do acumulador. Caso não inicialize accumulator, o valor inicial dele irá ser o primeiro elemento do array. 