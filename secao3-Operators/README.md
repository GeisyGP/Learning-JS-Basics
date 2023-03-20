# Operadores

Em JS temos diferentes operadores:
- Arithmetic
    Operações básicas, o que tem de diferente é a exponenciação:
    ```
    x ** y;
    ```
    Que é o mesmo que x^y.

- Assigment
    Operadores de atribuição:
        ```
        x += 5; //add 5
        x *= 3; //multiplica por 3 
        ```

- Comparison
    Operação de comparação que tem um resultado booleano. 
    Strict Equality (Tipo + valor):
  - `===`, `!==`;
    Lose Equality:
  -  `==`;
    Além disso, existem Ternary Operators:
    ```
    let type = points > 100 ? "gold" : "silver";
    ```
    Ou seja, se a comparação for verdadeira, atribui "gold" a variável "type", se falsa, atribui "silver".

- Logical
  
    Logical AND: &&

    Logical OR: ||

    Logical NOT: !  
    Esses operadores podem ser usados com valores não booleanos. Qualquer valor abaixo será lido como Falsy:
  -   undefined
  -   null
  -   0
  -   false
  -   ""
  -   NaN
    Qualquer valor que não é falsy é truthy
    Em uma lógica `false || 1 || 2`, assim que o primeiro valor truthy for encontrado, ele é retornado. 

- Bitwise
    
ex: `(1 | 2)` OR 

Funciona da seguinte forma:
    
1 = 00000001

2 = 00000010

O resultado será:

00000011 = 3

Caso o exemplo seja `1 & 2` (AND) o resultado será:

00000000 = 0

Pois só apareceria os bits que contém nos dois números. 