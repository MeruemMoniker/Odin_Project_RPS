        const buttons = document.querySelectorAll('button');
        let compScore= 0;
        let userScore= 0;
        
        buttons.forEach((button) => {
            button.addEventListener('click', function round() {
                const playerSelection = button.value
            });
        });

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

        const computerSelection = getComputerChoice();

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
            game()
            
        function game () {
        for (let i = 0; i < 1000; i++) {
            if (userScore >= 5) {
                return "You Win!"
            } 
            if (round().includes("lose")) {
                const compScore = compScore + 1
            } else if (round().includes("win")) {
                const userScore = userScore++
            };            
            }
        }}