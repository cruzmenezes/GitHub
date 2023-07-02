const input = require('readline-sync')
2
const numero_sorteado = 5;

let numero = Number (input.question('digite um numero:'));

while (numero !== numero_sorteado){
    console.log('voce errou o numero. tente novamente...')

    numero = Number (input.question('digite um numero:'));
}

console.log ('voce acertou!!! parabéns...');
