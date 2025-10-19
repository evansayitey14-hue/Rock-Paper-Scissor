console.log("hello");

let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#results");
container.style.border = "2px solid black";
container.style.padding = "50px";
container.style.margin = "50px";
container.style.backgroundColor = "grey";

const roundResult = document.getElementById('round-result');
const scoreDisplay = document.getElementById('score');
const finalResult = document.getElementById('final-result');

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function getHumanChoice() {
    const choiceSelection = prompt("Enter Rock, Paper, or Scissors");
    return choiceSelection;  
}

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return; // Stop playing once someone reaches 5
    }

    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    let message = "";

    if( computerChoice === 'Rock' && humanChoice === 'Rock') {
        message = "It's a tie!";
    } else if ( computerChoice === 'Rock' && humanChoice === 'Paper') {
        humanScore ++
        message = "You win! Paper beats Rock";
    } else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
        computerScore ++
        message = "Computer wins! Rock beats Scissors";
    } else if (computerChoice === 'Paper' && humanChoice === 'Paper') {
        message = "It's a tie!";
    } else if (computerChoice === 'Paper' && humanChoice === 'Rock') {
        computerScore ++
        message = "Computer wins! Paper beats Rock";
    } else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
        humanScore ++
        message = "You win! Scissors beats Paper";
    } else if (computerChoice === 'Scissors' && humanChoice === 'Scissors') {
        message = "It's a tie!";
    } else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
        computerScore ++
        message = "Computer wins! Scissors beats Paper";
    } else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
        humanScore ++
        message = "You win! Rock beats Scissors";
    } else {
        message = "Invalid input";
    }

    roundResult.textContent = `${message} You chose ${humanChoice}, Computer chose ${computerChoice}`;
    scoreDisplay.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        checkFinalResult();
    }
}

function checkFinalResult() {
    if (humanScore > computerScore) {
        finalResult.textContent = "🎉 You Won the Game!";
    } else if (humanScore < computerScore) {
        finalResult.textContent = "💻 Computer Won the Game!";
    } else {
        finalResult.textContent = "It's a Draw!";
    }
}

document.getElementById('rock').addEventListener("click", () => {
    playRound('rock', getComputerChoice());
});
document.getElementById('paper').addEventListener("click", () => {
    playRound('paper', getComputerChoice());
});
document.getElementById('scissors').addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
});