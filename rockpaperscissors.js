console.log("hello world");

// Jogo do Pedra Papel e Tesoura

//Criar IA Oponente

function getComputerChoice() {
  const randomNumber = Math.random() * 3;
  if (randomNumber < 1) {
    return "pedra";
  } else if (randomNumber < 2) {
    return "papel";
  } else {
    return "tesoura";
  }
}

console.log(getComputerChoice());

// Criar Tabuleiro

// Criar opções de jogadas para o Jogador Real

// Criar marcação de Pontuação
