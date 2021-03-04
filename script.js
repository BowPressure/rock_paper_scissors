window.onload = myMain;

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function myMain() {
    document.getElementById("start").onclick = newGame;
    document.getElementById("choiceButtons").onclick = playRound;
    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = computerScore;
}

function createButton(x) {
    const choiceButton = document.createElement("button");
    choiceButton.id = x;
    choiceButton.appendChild(document.createTextNode(x));
    const buttonPlacement = document.getElementById("choiceButtons");
    buttonPlacement.appendChild(choiceButton);
}

function newGame() {
    start.remove();
    createButton("rock");
    createButton("paper");
    createButton("scissors");

    playerScore = 0;
    computerScore = 0;
        document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = computerScore;
    result.textContent = "";

}

function computerPlay(){
    let computerChoice = Math.floor(Math.random() * choices.length);
    return computerChoice;
}

function determineWinner() {
    if (playerSelection == computerSelection){
        return "You chose " + playerSelection + " and the computer chose " + computerSelection + ". " + "It's a tie!";
      }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        playerScore += 1;
        return "You chose " + playerSelection + " and the computer chose " + computerSelection + ". " + "You win!";
      }
    else {
        computerScore += 1;
        return "You chose " + playerSelection + " and the computer chose " + computerSelection + ". " + "You lose!";
      }
}

function endGame() {
    if (playerScore > computerScore) {
        result.textContent = "YOU WON!";
        rock.remove();
        paper.remove();
        scissors.remove();
        createButton("start");
    }
    else {
        result.textContent = "YOU LOSE!";
        rock.remove();
        paper.remove();
        scissors.remove();
        createButton("start");
    }
}

function playRound(e) {
    playerSelection = e.target.id;
    computerSelection = choices[computerPlay()];

    if (playerSelection == "start") {
        newGame();
        return;
    }
    else if (playerSelection == "choiceButtons") {
        return;
    }

    result.textContent = determineWinner();
    console.log("player = " + playerSelection);
    console.log("computer = " + computerSelection);

    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}