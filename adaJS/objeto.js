//  OBJETO 

let pessoa = {
    name: 'edson',
    age: '42',
    city: 'SP',
    country: 'Brasil'
}

console.log(pessoa);
console.log(pessoa.name);

// ADCIONANDO UM ELEMENTO NO OBJETO
pessoa.altura = 1.67
console.log(pessoa);

// REMOVENDO ELEMENTO NO OBJETO

delete pessoa.altura

console.log(pessoa);

console.clear()

for(let chave in pessoa){
    console.log(chave)
}
