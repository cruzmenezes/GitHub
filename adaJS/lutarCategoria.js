


// inicio




function solucao(peso1, peso2) {
    if (peso1 < 55 || peso2 < 55) {
      return "NAO PODEM LUTAR";
    } else if (peso1 < 65 || peso2 < 65) {
      return "PODEM LUTAR";
    } else if (peso1 < 75 || peso2 < 75) {
      return "PODEM LUTAR";
    } else if (peso1 < 85 || peso2 < 85) {
      return "PODEM LUTAR";
    } else {
      return "PODEM LUTAR";
    }
  }
  
  // Exemplos de uso:
  console.log(solucao(60, 64)); // Saída: PODEM LUTAR
  console.log(solucao(55, 54)); // Saída: NAO PODEM LUTAR


//   fim




  