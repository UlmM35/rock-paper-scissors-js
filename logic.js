function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    const choice = prompt("Choose rock, paper or scissors: ");

    return choice;
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const humanChoiceLower = humanChoice.toLowerCase();
    
        if (humanChoiceLower === computerChoice ) {
            console.log("Draw");
        } else if (humanChoiceLower == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoiceLower == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoiceLower == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoiceLower == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if (humanChoiceLower == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (humanChoiceLower == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else {
            console.log("Something went wrong.")
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();