        const buttons = document.querySelectorAll('button');
        let compScore = 0;
        let userScore = 0;
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
                    getComputerChoice()
                    console.log(`Player: ${playerSelection}`)
                    console.log(computerSelection)
                    console.log(round(computerSelection, playerSelection))
                    return
                });
            });

            console.log("yo")

            function round (computerSelection, playerSelection) {
                if (computerSelection == "Scissors" && playerSelection == "Scissors") {
                    return "It's a tie."
                } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
                    userScore = userScore + 1
                    roundWinner = 'player'
                    console.log("Rock beats scissors.")
                } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
                    compScore = compScore + 1
                    roundWinner = 'computer'
                    console.log("Scissors beats paper.")
                } else if (computerSelection == "Rock" && playerSelection == "Rock") {
                    return "It's a tie."
                } else if (computerSelection == "Rock" && playerSelection == "Paper") {
                    userScore = userScore + 1
                    roundWinner = 'player'
                    console.log("Paper beats rock.")
                } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
                    compScore = compScore + 1
                    roundWinner = 'computer'
                    console.log("Rock beats scissors.")
                } else if (computerSelection == "Paper" && playerSelection == "Paper") {
                    return "It's a tie."
                } else if (computerSelection == "Paper" && playerSelection == "Rock") {
                    compScore = compScore + 1
                    roundWinner = 'computer'
                    console.log("Paper beats rock.")
                } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
                    userScore = userScore + 1
                    roundWinner = 'player'
                    console.log("Scissors beats paper.")
                }
                updateScore(roundWinner, userScore, compScore)
            }
            

            function updateScore(roundWinner, userScore, compScore) {
                console.log("yup")
                let winOrLose = document.querySelectorAll('#win-lose')
                if (roundWinner == 'player') {
                    if (userScore == 5) {
                        winOrLose.textContent = "YOU WIN!!"
                        console.log("YOU WIN!")
                        return
                    } else if (userScore < 5) {
                        "You win this round, keep going!"
                        return
                    }
                } else if (compScore == 5) {
                    winOrLose.textContent = "YOU WIN!!"
                    console.log("you lose...")    
                    return None
                    } else if (compScore < 5) {
                        console.log("You lost this round, try again!")
                        return
                }}

                