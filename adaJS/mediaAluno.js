

// CALCULAR A MEDIA DO ALUNO

function calcularMedia(notas) {
    let soma = 0;
    for(let i = 0; i < notas.length; i++){
      soma += notas[i];
    }
    let media = soma / notas.length;
    return media;
  }
  
  const notasAluno = [7, 8, 9, 6, 5];
  const mediaFinal = calcularMedia(notasAluno);
  console.log ("A media do aluno e: " + mediaFinal)