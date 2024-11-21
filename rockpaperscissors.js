// Jogo do Pedra Papel e Tesoura

//Criar IA Oponente

function getComputerChoice() {
  const randomNumber = Math.random() * 3;
  if (randomNumber < 1) {
    return "rock";
  } else if (randomNumber < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

// Criar opções de jogadas para o Jogador Real

function getHumanChoice() {
  let jogada = window.prompt("Choose between 'Rock', 'Paper', or 'Scissors':");
  return jogada.toLowerCase();
}

// Criar marcação de Pontuação

let humanScore = 0;
let computerScore = 0;

// Criar Tabuleiro

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You Loose!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You Loose!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You Win!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You Loose!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    computerScore++;
    return "You Win!";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);
console.log(`You chose: ${humanSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(result);
console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
