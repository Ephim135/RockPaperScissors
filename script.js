let playerChoice = "";
let playerPoints = 0;
let computerPoints = 0;


function getComputerChoice() {
    
    let random = Math.random() * 3;
    
    if (random > 1 && random < 2){
        return "ROCK";
    }
    
    else if (random < 1){
        return "PAPER";
    }

    else {
        return "SCISSORS";
    }
    
}
    /* Rock -> Scissors -> Paper -> Rock */
  

    

function playRound(playerChoice){

    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    
    if (playerChoice == computerChoice) {
        return "Draw";
    }
    else if (playerChoice == "ROCK"){
        if (computerChoice == "SCISSORS"){
            return "Player Won!";
        }
        else if (computerChoice == "PAPER"){
            return "Computer Won!";
        }
    }
    else if (playerChoice == "SCISSORS"){
        if (computerChoice == "ROCK"){
            return "Computer Won!";
        }
        else if (computerChoice == "PAPER"){
            return "Player Won!";
        }
    }
    else /* playerChoice == "Paper" */{
        if (computerChoice == "SCISSORS"){
            return "Computer Won!" ;
        }
        else if (computerChoice == "ROCK"){
            return "Player Won!" ;
        }
    }

}



window.addEventListener("click", function(e){
    
    console.log(e);

    let currentRound = playRound(e.srcElement.alt);
    
    console.log(currentRound);

    if (currentRound == "Computer Won!"){
        computerPoints++;

        if (computerPoints == 5){
            document.getElementById("winner").innerText = "Computer Won this round!!!";
            computerPoints = 0;
            playerPoints = 0;
        }
    }
    else if (currentRound == "Player Won!"){
        playerPoints++;

        if (playerPoints == 5){
            document.getElementById("winner").innerText = "Player Won this round!!!";
            computerPoints = 0;
            playerPoints = 0;
        }
    }

    document.getElementById("score").innerText = `Player Score: ${playerPoints} Computer Score: ${computerPoints}`
    document.getElementById("round").innerText = `${currentRound}`
});


// document.getElementById("rock").addEventListener("click", () => {console.log("rock")});
// document.getElementById("paper").addEventListener("click", () => {return playerChoice = paper});
// document.getElementById("scissors").addEventListener("click", () => {return playerChoice = scissors});