        const buttons = document.querySelectorAll('button');
        let compScore = 0;
        let userScore = 0;

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    let playerSelection = button.value;
                    function getComputerChoice(){
                        let compPic = document.querySelector('#computer-img');
                        let randNum = Math.floor(Math.random() * 3);
                        if (randNum == 0) {
                            compPic.style.backgroundImage="url('https://illustoon.com/photo/dl/11331.png')";
                            return "Rock"
                        } else if (randNum == 1) {
                            compPic.style.backgroundImage="url('https://clipartix.com/wp-content/uploads/2016/04/Primary-writing-paper-clipart.png')";
                            return "Paper"
                        } else if (randNum == 2) {
                            compPic.style.backgroundImage="url('https://illustoon.com/photo/dl/5937.png')";
                            return "Scissors"
                        }
                    };
                    function getPlayerPic (playerSelection) {
                        let playerPic = document.querySelector('#player-img');
                        if (playerSelection == "Rock") {
                            playerPic.style.backgroundImage="url('https://illustoon.com/photo/dl/11331.png')";
                        } else if (playerSelection == "Paper") {
                            playerPic.style.backgroundImage="url('https://clipartix.com/wp-content/uploads/2016/04/Primary-writing-paper-clipart.png')";
                        } else if (playerSelection == "Scissors") {
                            playerPic.style.backgroundImage="url('https://illustoon.com/photo/dl/5937.png')";
                        }
                    }
                    getPlayerPic(playerSelection) 
                    let computerSelection = getComputerChoice();
                    round(computerSelection, playerSelection)
                    return
                });
            });

            console.log("yo");

            function round (computerSelection, playerSelection) {
                let roundWinner = "";
                let winMessage = "";
                let roundWinnah = document.querySelector('#Winnah');
                if (computerSelection == "Scissors" && playerSelection == "Scissors") {
                    roundWinnah.textContent = "Nobody wins this Round! Your scissors are equal to the computer's scissors!!"
                    return "It's a tie."
                } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
                    userScore = userScore + 1
                    roundWinner = 'player'
                    winMessage = "Rock beats scissors."
                } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
                    compScore = compScore + 1
                    roundWinner = 'computer'
                    winMessage = "Scissors beats paper."
                } else if (computerSelection == "Rock" && playerSelection == "Rock") {
                    roundWinnah.textContent = "Nobody wins this Round! Your rock bounced off of the computer's rock!!"
                    return "It's a tie."
                } else if (computerSelection == "Rock" && playerSelection == "Paper") {
                    userScore = userScore + 1
                    roundWinner = 'player'
                    winMessage = "Paper beats rock."
                } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
                    compScore = compScore + 1
                    roundWinner = 'computer'
                    winMessage = "Rock beats scissors."
                } else if (computerSelection == "Paper" && playerSelection == "Paper") {
                    roundWinnah.textContent = "Nobody wins this Round! You gave each other a paper cut!!"
                    return "It's a tie."
                } else if (computerSelection == "Paper" && playerSelection == "Rock") {
                    compScore = compScore + 1
                    roundWinner = 'computer'
                    winMessage = "Paper beats rock."
                } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
                    userScore = userScore + 1
                    roundWinner = 'player'
                    winMessage = "Scissors beats paper."
                }
                updateScore(roundWinner, userScore, compScore, winMessage)
            }
            

            function updateScore(roundWinner, userScore, compScore, winMessage) {
                console.log("yup")
                let winOrLose = document.querySelector('#win-lose')
                let newPlayerScore = document.querySelector('#playerScore')
                let newComputerScore = document.querySelector('#computerScore')
                let Winnah = document.querySelector('#Winnah')
                if (roundWinner == 'player') {
                    Winnah.textContent = `You win this round! ${winMessage}`
                    if (userScore == 5) {
                        newPlayerScore.textContent = "Player Score: 5"
                        winOrLose.textContent = "YOU WIN!!"
                        console.log("YOU WIN!")
                        return
                    } else if (userScore == 4) {
                        newPlayerScore.textContent = "Player Score: 4"
                        console.log("You win this round, keep going!")
                        return
                    } else if (userScore == 3) {
                        newPlayerScore.textContent = "Player Score: 3"
                        console.log("You win this round, keep going!")
                        return
                    } else if (userScore == 2) {
                        newPlayerScore.textContent = "Player Score: 2"
                        console.log("You win this round, keep going!")
                        return
                    } else if (userScore == 1) {
                        newPlayerScore.textContent = "Player Score: 1"
                        console.log("You win this round, keep going!")
                        return
                    }
                } else if (compScore == 5) {
                    Winnah.textContent = `You lose this round. ${winMessage}`
                    newComputerScore.textContent = "Computer Score: 5"
                    winOrLose.textContent = "YOU LOSE!!"
                    console.log("you lose...")    
                    return 
                    } else if (compScore == 4) {
                        Winnah.textContent = `You lose this round. ${winMessage}`
                    newComputerScore.textContent = "Computer Score: 4"
                    console.log("You lost this round, keep going!")
                    return
                } else if (compScore == 3) {
                    Winnah.textContent = `You lose this round. ${winMessage}`
                    newComputerScore.textContent = "Computer Score: 3"
                    console.log("You lost this round, keep going!")
                    return
                } else if (compScore == 2) {
                    Winnah.textContent = `You lose this round. ${winMessage}`
                    newComputerScore.textContent = "Computer Score: 2"
                    console.log("You lost this round, keep going!")
                    return
                } else if (compScore == 1) {
                    Winnah.textContent = `You lose this round. ${winMessage}`
                    newComputerScore.textContent = "Computer Score: 1"
                    console.log("You lost this round, keep going!")
                    return
                }
            }

                