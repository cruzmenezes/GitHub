// ESCOPO DO PROJETO 

// JOGO DE ADIVINHAÇÃO


// Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.


// INICIO 

// Número aleatório entre 0 e 10
const numeroInicial = Math.floor(Math.random() * 11);

// Número de tentativas
let tentativas = 3;

console.log("Bem-vindo ao jogo de adivinhar o número!");
console.log("Tente adivinhar o número entre 0 e 10.");

while (tentativas > 0) {
  const chute = parseInt(prompt("Digite o seu chute:"));

  if (chute === numeroInicial) {
    console.log("Parabéns, você acertou o número!");
    break;
  } else {
    console.log("Você errou!");

    if (tentativas > 1) {
      console.log(`Você ainda tem ${tentativas - 1} tentativas.`);
    } else {
      console.log(`Suas tentativas acabaram. O número era ${numeroInicial}.`);
    }
  }

  tentativas--;
}
