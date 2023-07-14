// // ESCOPO DO PROBLEMA

// Problema
// Como desenvolvedor sênior da Cubos Game, empresa da Cubos Academy destinada a fazer jogos eletrônicos para computadores, você ficou responsável por implementar a lógica que mostre ao jogador do "Enfrentando Bugs", novo jogo da empresa, se ele pode ou não entrar na sala do chefão da fase em que ele se encontra no jogo.

// Para ter o direito de enfrentar o chefão, o jogador deve ter coletado três itens específicos ao longo da fase, que variam de chefão para chefão.

// Entrada
// A entrada do seu programa será composta por quatro variáveis:

// itensColetados: array de strings em que cada posição indica um item coletado ao longo da fase;
// itemNecessario1: uma string que indica o primeiro item necessário para enfrentar o chefão;
// itemNecessario2: uma string que indica o segundo item necessário para enfrentar o chefão;
// itemNecessario3: uma string que indica o terceiro item necessário para enfrentar o chefão.
// Saída
// Você deve retornar:

// PODE ENFRENTAR: caso o jogador tenha os três itens necessários para enfrentar o chefão;
// NAO PODE ENFRENTAR: caso o jogador não tenha os três itens necessários para enfrentar o chefão.
// Exemplo
// Entrada
// itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

// itemNecessario1 = "machado"

// itemNecessario2 = "espada"

// itemNecessario3 = "sapato"

// Saída
// NAO PODE ENFRENTAR

// Explicação
// Apesar do jogador ter conseguido coletar dois itens necessários, o machado e o sapato, ele não conseguiu obter a espada.

// Veja os três principais erros que você pode está cometendo ao passar seu código para a nossa plataforma:
// Você está esquecendo de trocar o console.log pelo return;
// Você não está retornando o que é pedido. Lembre-se que a mensagem a ser retornada tem que ser exatamente a solicitada no exercício, sem espaços em branco a mais e com as letras maiúsculas. Se a questão estiver pedindo, por exemplo, para retornar um número, não retorne nenhuma mensagem antes, retorne APENAS o número;
// Você está atribuindo valores às variáveis de entrada.
// Para maiores informações, veja a PARTE PRÁTICA DO MINICURSO.

// CASO VOCÊ TENHA DELETADO A FUNÇÃO "solucao", COLE O CÓDIGO ABAIXO:
// function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {

//       // seu codigo aqui

// }

// CLIQUE AQUI PARA VER O VÍDEO SUGERIDO QUE IRÁ AUXILIÁ-LO A RESOLVER ESTA QUESTÃO.




// INICIO


function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    if (
      itensColetados.includes(itemNecessario1) &&
      itensColetados.includes(itemNecessario2) &&
      itensColetados.includes(itemNecessario3)
    ) {
      return "PODE ENFRENTAR";
    } else {
      return "NAO PODE ENFRENTAR";
    }
  }
  
  // Exemplo de uso:
  const itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"];
  const itemNecessario1 = "machado";
  const itemNecessario2 = "espada";
  const itemNecessario3 = "sapato";
  
  console.log(solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3));

  
//   FIM