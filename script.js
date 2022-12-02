function getComputerChoice () {
    
    let random = Math.random() * 3;
    let choice = "";
    
    
    if (random > 1 && random < 2){
        return choice = "Rock";
    }
    
    else if (random < 1){
        return choice = "Paper";
    }

    else {
        return choice = "Scissors";
    }
    
}