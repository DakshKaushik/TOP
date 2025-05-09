let playerScore = 0
let computerScore = 0
function getComputerChoice() {
    let pick = Math.floor(Math.random() * 3);
    if (pick === 0) {
        return "rock"
    }
    if (pick === 1) {
        return "paper"
    }
    if (pick === 2) {
        return "scissor"
    }
}
function getUserChoice() {
    const buttons = document.querySelectorAll("button")
    const selectedValue = document.querySelector(".playerChoice")
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const userChoice = button.id;
            selectedValue.textContent = `Player Selected : ${userChoice}`
            playRound(userChoice, getComputerChoice());
        });
    });
}
function playRound(userChoice, computerChoice) {
    const finalCS=document.querySelector("#computerScore")
    const finalPS=document.querySelector("#userScore")
    const computerChoiceDisplay = document.querySelector(".computerChoice");
    computerChoiceDisplay.textContent = `Computer Selected: ${computerChoice}`;
    if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        playerScore += 1;
        finalPS.textContent = `User Score: ${playerScore}`;
    } else {
        computerScore += 1;
        finalCS.textContent = `Computer Score: ${computerScore}`;
    } 
    if (playerScore === 5) {
        alert("You win the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer wins the game!");
        resetGame();
    }
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#userScore").textContent = "User Score: 0";
    document.querySelector("#computerScore").textContent = "Computer Score: 0";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
}
getUserChoice();