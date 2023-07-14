let minhaLista = [10, 42, 150, 35, 50, 3, 2, 1]

for(let elemento of minhaLista){

    console.log(typeof(elemento))
}

console.clear();


// soma lista 

let acumulador = 0;

for(let numero of minhaLista){
    acumulador += numero;
}

console.log(`A soma da lista é: ${acumulador}`);


// Qual o menor numero da lista

let menorNumero;

for (let numero of minhaLista){
    if(menorNumero === undefined){
        menorNumero = numero;
    }else {
        if(numero < menorNumero){
            menorNumero = numero
        }
    }
}

console.log(`O menor numero da lisra é: ${menorNumero}`);