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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelector("#button-container");
    let result = document.querySelector("#results");
    result.textContent = "Score: 0 - 0";

    buttons.addEventListener("click", (event) => {
        let target = event.target;

        if (target.id === "rock") {
            playRound("rock", getComputerChoice());
        } else if (target.id === "paper") {
            playRound("paper", getComputerChoice());
        } else if (target.id == "scissors") {
            playRound("scissors", getComputerChoice());
        }

        result.textContent = "Score: " + humanScore + " - " + computerScore;

        if (humanScore >= 5) {
            result.textContent = "You win!";
        } else if (computerScore >= 5) {
            result.textContent = "You lose!";
        }

    });

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
}

playGame();