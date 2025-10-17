console.log("hello");





    
let humanScore = 0;
let computerScore = 0;


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
    if( computerChoice === 'Rock' && humanChoice === 'Rock') {
        console.log("It's  a tie !");
    } else if ( computerChoice === 'Rock' && humanChoice === 'Paper') {
        humanScore ++
        console.log("You win !, Paper beats Rock");
    } else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
        computerScore ++
        console.log("Computer Win !, Rock beats Scissors");
    } else if (computerChoice === 'Paper' && humanChoice === 'Paper') {
        console.log("It's a tie !");
    } else if (computerChoice === 'Paper' && humanChoice === 'Rock') {
        computerScore ++
        console.log("Computer win! , Paper beats Rock");
    } else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
        humanScore ++
        console.log("You win! , Scissors beats Paper");
    } else if (computerChoice === 'Scissors' && humanChoice === 'Scissors') {
        console.log( "It's a tie");
    } else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
        computerScore ++
        console.log("Computer win! , Scissors beats Paper");
    } else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
        humanScore ++
        console.log("You win! , Rock beats Scissors");
    } else {
        console.log("Invalid input");
    }
}

function playGame() {
    for ( let i=1 ; i <= 5; i++) {
        console.log(`\nRound ${i}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score - You : ${humanScore},  score - computer: ${computerScore}`);
    }
    console.log("final Results");
    if (humanScore > computerScore) {
        console.log("You Won the Game");
    } else if (humanScore < computerScore) {
        console.log("Computer Won the Game");
    } else {
        console.log("It's a Draw");
    }

}
   


playGame();