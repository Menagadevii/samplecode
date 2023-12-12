// function playGame(userChoice) {
//     const choices = ['rock', 'paper', 'scissors'];
//     const computerChoice = choices[Math.floor(Math.random() * 3)];
  
//     let resultMessage = `You chose ${userChoice}. Computer chose ${computerChoice}. `;
    
//     if (userChoice === computerChoice) {
//       resultMessage += "It's a tie!";
//     } else if (
//       (userChoice === 'rock' && computerChoice === 'scissors') ||
//       (userChoice === 'paper' && computerChoice === 'rock') ||
//       (userChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//       resultMessage += 'You win!';
//     } else {
//       resultMessage += 'Computer wins!';
//     }
  
//     document.getElementById('result').textContent = resultMessage;
//   }
  

const choices = ["rock", "paper", "scissors"];

    document.getElementById("rock").addEventListener("click", function() {
      playGame("rock");
    });

    document.getElementById("paper").addEventListener("click", function() {
      playGame("paper");
    });

    document.getElementById("scissors").addEventListener("click", function() {
      playGame("scissors");
    });

    function playGame(userChoice) {
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];

      let result = "";

      if (userChoice === computerChoice) {
        result = "It's a tie!";
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        result = "You win!";
      } else {
        result = "Computer wins!";
      }

      document.getElementById("result").innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    }

