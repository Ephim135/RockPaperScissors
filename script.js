


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
    let playerChoice = "";

    

function playRound(playerChoice){

    let computerChoice = getComputerChoice();
    console.log(computerChoice);

    let playerChoiceUpper = playerChoice.toUpperCase();
    
    if (playerChoiceUpper == computerChoice) {
        return "Draw";
    }
    else if (playerChoiceUpper == "ROCK"){
        if (computerChoice == "SCISSORS"){
            return "Player Won!";
        }
        else if (computerChoice == "PAPER"){
            return "Computer Won!";
        }
    }
    else if (playerChoiceUpper == "SCISSORS"){
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

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    
    for (let i = 1; i < 6; i++){
        
        playerChoice = prompt("Choose Rock, Paper or Scissors:");

        let result = playRound(playerChoice);

        console.log(result);

        if (result == "Player Won!"){
            playerPoints++;
        }
        else if (result == "Computer Won!"){
            computerPoints++;
        }
        
        console.log(`Player Points: ${playerPoints} Computer Points: ${computerPoints} Rounds Played: ${i}`)
    }
    
    winner(playerPoints,computerPoints);

}


function winner(playerPoints, computerPoints){
    if (playerPoints == computerPoints){
        console.log(`Draw Player Points: ${playerPoints} Computer Points: ${computerPoints}`);
    }
    else if ( playerPoints > computerPoints){
        console.log(`Player WON!!! Player Points: ${playerPoints} Computer Points: ${computerPoints}`);
    }
    else {
        console.log(`Computer WON!!! Player Points: ${playerPoints} Computer Points: ${computerPoints}`)
    }
}
