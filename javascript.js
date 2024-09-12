console.log("Hello World!");

function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    if (randomNumber <= 0.33) {
        console.log(randomNumber);
        computerChoice = "Rock";
        console.log(computerChoice);
        return computerChoice;
    }
    else if (randomNumber <= 0.66) {
        console.log(randomNumber);
        computerChoice = "Paper";
        console.log(computerChoice);
        return computerChoice;
    }
    else 
    console.log(randomNumber);
    computerChoice = "Scissors";
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice () {
    let choice = prompt("Enter your choice (Rock, Paper or Scissors");
    console.log(choice);
    lowerCaseChoice = choice.toLowerCase();
    while (lowerCaseChoice != "rock" && lowerCaseChoice != "paper" && lowerCaseChoice != "scissors") {
        choice = prompt("Not valid, try again.");
        lowerCaseChoice = choice.toLowerCase();
    }
    console.log(lowerCaseChoice);
    return lowerCaseChoice;
}





function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "rock":
                if (computerChoice == "Rock") {
                    console.log("It's a tie!");
                    break;
                }
                else if (computerChoice == "Paper") {
                    console.log("You lose!");
                    computerScore++;
                    break;
                }
                else {
                console.log("You win!");
                humanScore++
                break;
                }
            case "paper":
                if (computerChoice == "Paper") {
                    console.log("It's a tie!");
                    break;
                }
                else if (computerChoice == "Rock") {
                    console.log("You lose!");
                    computerScore++;
                    break;
                }
                else {
                console.log("You win!");
                humanScore++
                break;
                }

            case "scissors":
                if (computerChoice == "Scissors") {
                    console.log("It's a tie!");
                    break;
                }
                else if (computerChoice == "Rock") {
                    console.log("You lose!");
                    computerScore++;
                    break;
                }
                else {
                console.log("You win!");
                humanScore++
                break;
                }
        }
    }

    for (i=1; i<6; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore < computerScore) {
        console.log("Computer wins!");
        console.log("Player score: " + humanScore + " & Computer Score: " + computerScore);
    } else
    if (humanScore > computerScore) {
        console.log("Human wins!");
        console.log("Player score: " + humanScore + " & Computer Score: " + computerScore);
    } else
    console.log("It's a tie!");
    console.log("Player score: " + humanScore + " & Computer Score: " + computerScore);
}

playGame();



    