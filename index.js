        const buttons = document.querySelectorAll('button');
        let compScore= 0;
        let userScore= 0;
        const computerSelection = getComputerChoice();

        function getComputerChoice(){
            const randNum = Math.floor(Math.random() * 3);
            if (randNum == 0) {
                return "Rock"
            } else if (randNum == 1) {
                return "Paper"
            } else if (randNum == 2) {
                return "Scissors"
            }
        };

        function game () {
            console.log("yo")
            let arr = []
            let newarr = []
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
            let scoop = round()
            console.log(scoop)
        for (let i = 0; i < 50; i++) {
            if (scoop.includes("win")) {
                console.log("You win!")
                arr.push(i)
                if (arr.length >=5) {
                return "WINNER!!!"}
            } else if (scoop.includes("lose")) {
                console.log("You lose!")
                newarr.push(i)
                if (newarr.length >=5) {
                return "LOSER!!!"}
            } else {
                console.log("It's a tie!")
                i = i - 1
            }
            }
        }
        
        buttons.forEach((button) => {
            button.addEventListener('click', function () {
                let playerSelection = button.value;
                game();
                console.log(playerSelection);
                return playerSelection
            });
        });