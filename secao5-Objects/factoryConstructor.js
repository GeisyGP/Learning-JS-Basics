/*EXERCÍCIO: Crie o mesmo objeto de endereço, mas para inicializar 
primeiro use uma função de fábrica e depois uma função construtora.*/

//Fábrica
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let addressF = createAddress("Rua Professor Adalberto Neves", "Recife", 52211417);
console.log(addressF);

//Construtora
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let addressC = new Address("Rua Professor Adalberto Neves", "Recife", 52211417);
console.log(addressC);