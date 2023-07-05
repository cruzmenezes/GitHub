// ARRAYS

// COMO CRIAR UM ARRAY?

let arr = ['Edson', 'victor', 42, 1.2]

console.log(arr)


// COMO ACESSAR OS ELEMENTOS DO ARRAY

console.log('primeiro array:', arr[0]);
console.log('primeiro array:', arr[1]);
console.log('primeiro array:', arr[3]);

console.log('tamanho do array', arr.length);


// PERCORENDO ARRAYS

console.clear()

for(let i =0; i < arr.length; i++){
    console.log(arr[i])
}


for(let elemento of arr ){
    console.log(elemento);
}

for(let indice in arr ){
    console.log(indice, arr[indice]);
}



