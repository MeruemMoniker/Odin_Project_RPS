        const buttons = document.querySelectorAll('button');
        let compScore= 0;
        let userScore= 0;
        let computerSelection = getComputerChoice();

        function getComputerChoice(){
            let randNum = Math.floor(Math.random() * 3);
            if (randNum == 0) {
                return "Rock"
            } else if (randNum == 1) {
                return "Paper"
            } else if (randNum == 2) {
                return "Scissors"
            }
        };

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    let playerSelection = button.value;
                    getComputerChoice();
                    console.log(playerSelection);
                    console.log(computerSelection);
                    round(computerSelection, playerSelection);
                    return playerSelection
                });
            });

            console.log("yo")

            function round (computerSelection, playerSelection) {
                if (computerSelection == "Scissors" && playerSelection == "Scissors") {
                    return "It's a tie."
                } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
                    userScore++
                    roundWinner = 'player'
                    return "Rock beats scissors, you win."
                } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
                    compScore++
                    roundWinner = 'computer'
                    return "Scissors beats paper, you lose."
                } else if (computerSelection == "Rock" && playerSelection == "Rock") {
                    return "It's a tie."
                } if (computerSelection == "Rock" && playerSelection == "Paper") {
                    userScore++
                    roundWinner = 'player'
                    return "Paper beats rock, you win"
                } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
                    compScore++
                    roundWinner = 'computer'
                    return "Rock beats scissors, you lose."
                } else if (computerSelection == "Paper" && playerSelection == "Paper") {
                    return "It's a tie."
                } if (computerSelection == "Paper" && playerSelection == "Rock") {
                    compScore++
                    roundWinner = 'computer'
                    return "Paper beats rock, you lose."
                } if (computerSelection == "Paper" && playerSelection == "Scissors") {
                    userScore++
                    roundWinner = 'player'
                    return "Scissors beats paper, you win."
                }
                updateScore(roundWinner)
            }
            

            function updateScore(roundWinner) {
                if (roundWinner == player) {
                    if (userScore === 5) {
                        return "YOU WIN!"
                    } else if (userScore < 5) {
                        return "You win this round, keep going!"
                    }
                } else {
                    if (compScore === 5) {
                        return "you lose..."
                    } else if (compScore < 5) {
                        return "You lost this round, try again!"
                }}
            }