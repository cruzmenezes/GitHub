// FUNÇÃO

//  DEFINIÇÃO DA FUNÇÃO

function saudacao(name, cursos='javascript'){
    console.log(`olá, ${name}! seja bem vindo(a) ao ${cursos} do Gloriou!!!`)
}

saudacao('Edson victor', 'python');


function soma(num1, num2){
    return num1 + num2
}

let resultado = soma(20, 30);

console.log(`O resultado e: ${resultado}`);