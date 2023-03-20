/*EXERCÍCIO: Crie dois objetos de endereço, usando a função construtura 
anterior. Cria uma função chamada areEqual, para verificar se os dois objetos 
são iguais e uma função chamada areSame para dizer se os dois estão apontando 
para o mesmo objeto.*/

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address("Rua Professor Adalberto Neves", "Recife", 52211417);
let address2 = new Address("Rua Professor Adalberto Neves", "Recife", 52211417);
let address3 = address1;

function areEqual(address1, address2) {
    if (address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode)
        return "São iguais";
        
    else return "São diferentes"; 
}

function areSame(address1, address2){
    if (address1 === address2) return "Mesma referência";
    else return "Diferentes referências";
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));