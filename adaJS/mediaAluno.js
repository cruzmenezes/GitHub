

// CALCULAR A MEDIA DO ALUNO
console.clear();

function calcularMedia(notas) {
    let soma = 0;
    for(let i = 0; i < notas.length; i++){
      soma += notas[i];
    }
    let media = soma / notas.length;
    return media;
  }
  
  const notasAluno = [7, 8, 10, 6, 9];
  const mediaFinal = calcularMedia(notasAluno);
  console.log (`A média do aluno é: ${mediaFinal}`);