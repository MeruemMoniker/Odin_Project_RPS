        const buttons = document.querySelectorAll('button');
        
        buttons.forEach((button) => {
            button.addEventListener('click', function round() {
                const playerSelection = button.value

                function getComputerChoice () {
                    const Rock = 0
                    const Paper = 1
                    const Scissors = 2
                    const randNum = Math.floor(Math.random() * 3);
                    if (randNum == Rock) {
                        return "Rock"
                    } else if (randNum == Paper) {
                        return "Paper"
                    } else if (randNum == Scissors) {
                        return "Scissors"
                    }
                };

                const computerSelection = getComputerChoice();
            });
        });

        function game () {
            function round (computerSelection, playerSelection) {
                if (computerSelection == "Scissors" && playerSelection == "Scissors") {
                    return "It's a tie."
                } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
                    return "Rock beats scissors, you win."
                } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
                    return "Scissors beats paper, you lose."
                } else if (computerSelection == "Rock" && playerSelection == "Rock") {
                    return "It's a tie."
                } if (computerSelection == "Rock" && playerSelection == "Paper") {
                    return "Paper beats rock, you win"
                } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
                    return "Rock beats scissors, you lose."
                } else if (computerSelection == "Paper" && playerSelection == "Paper") {
                    return "It's a tie."
                } if (computerSelection == "Paper" && playerSelection == "Rock") {
                    return "Paper beats rock, you lose."
                } if (computerSelection == "Paper" && playerSelection == "Scissors") {
                    return "Scissors beats paper, you win."
                }
            }
            for (let i = 0; i < 1000; i++) {
                if ("lose" in round()) {
                    const compScore = ++compScore
                } else if ("win" in round()) {
                    const userScore = userScore
                };
                if (compScore >= 5 | userScore >= 5) {
                    return "You Win!"
                };
            }
        }