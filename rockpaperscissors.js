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

// Criar opções de jogadas para o Jogador Real

function getHumanChoice() {
  let jogada = window.prompt("Choose between 'Rock', 'Paper', or 'Scissors':");
  return jogada.toLowerCase();
}

// Criar jogo de 5 rondas

let humanScore = 0;
let computerScore = 0;

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
    humanScore++;
    return "You Win!";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(result);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
  }
}

//Creating 3 buttons one for each available play

const rockButton = document.createElement("button");
rockButton.id = "rockButton";
rockButton.innerHTML = '<img src="rock.png" />';
rockButton.style.width = "300px";
rockButton.style.height = "300px";
const img = rockButton.querySelector("img");
img.style.width = "100%"; // Make the image fill the button's width
img.style.height = "100%"; // Keep the image's aspect ratio

const paperButton = document.createElement("button");
paperButton.id = "paperButton";
paperButton.innerHTML = '<img src="paper.png" />';
paperButton.style.width = "300px";
paperButton.style.height = "300px";
const img2 = paperButton.querySelector("img");
img2.style.width = "100%"; // Make the image fill the button's width
img2.style.height = "100%"; //

const scissorsButton = document.createElement("button");
scissorsButton.id = "scissorsButton";
scissorsButton.innerHTML = '<img src="scissors.png" />';
scissorsButton.style.width = "300px";
scissorsButton.style.height = "300px";
const img3 = scissorsButton.querySelector("img");
img3.style.width = "100%"; // Make the image fill the button's width
img3.style.height = "100%"; //

rockButton.addEventListener("click", () => {
  const humanChoice = "rock";
  const computerChoice = getComputerChoice();

  const result = playRound(humanChoice, computerChoice);
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(result);
  console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
});

paperButton.addEventListener("click", () => {
  const humanChoice = "paper";
  const computerChoice = getComputerChoice();

  const result = playRound(humanChoice, computerChoice);
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(result);
  console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
});

scissorsButton.addEventListener("click", () => {
  const humanChoice = "scissors";
  const computerChoice = getComputerChoice();

  const result = playRound(humanChoice, computerChoice);
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(result);
  console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
});

const board = document.createElement("div");
board.style.display = "flex";
board.style.justifyContent = "space-around";
board.appendChild(rockButton);
board.appendChild(paperButton);
board.appendChild(scissorsButton);

document.body.appendChild(board);
