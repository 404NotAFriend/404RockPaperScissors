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

// Criar opções de jogadas para o Jogador Real

function getHumanChoice() {
  let jogadas = window.prompt("Choose between 'Rock', 'Paper', or 'Scissors':");
}

console.log(getHumanChoice());

// Criar Tabuleiro

// Criar marcação de Pontuação
