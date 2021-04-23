let humanScore = 0;
let computerScore = 0;
let isgameover = false;

// DOM
const rock_img = document.getElementById("rock");
const paper_img = document.getElementById("paper");
const scissor_img = document.getElementById("scissors");

const you_Scoreboard = document.getElementById("humanScore");
const bot_Scoreboard = document.getElementById("computerScore");
const game_update = document.getElementById("game-update");

function userWins(human, computer) {
    humanScore++;
    you_Scoreboard.innerHTML = humanScore;
    game_update.innerText = `You win! Bot picked ${computer}`;
    
    document.getElementById(human).classList.add('green-glow');
    setTimeout(function() { document.getElementById(human).classList.remove('green-glow')}, 500);
};

function userLoses(human, computer) {
    game_update.innerText = `You lose! Bot picked ${computer}`;
    computerScore++;
    bot_Scoreboard.innerHTML = computerScore;
        
    document.getElementById(human).classList.add('red-glow');
    setTimeout(function() { document.getElementById(human).classList.remove('red-glow')}, 500);
};

function tie(human, computer) {
    document.getElementById(human).classList.add('black-glow');
    setTimeout(function() { document.getElementById(human).classList.remove('black-glow')}, 500);
    game_update.innerText = `It's a tie! Bot picked ${computer}`;
};


// event listeners:
rock_img.addEventListener("click", function () {
  compareMoves("rock");
});
paper_img.addEventListener("click", function () {
  compareMoves("paper");
});

scissor_img.addEventListener("click", function () {
  compareMoves("scissors");
});

// functions:
function generateComputerMove() {
  let randomNumber = Math.floor(Math.random() * 3); // number between 0 and 2
  let moves = ["rock", "paper", "scissors"];
  return moves[randomNumber]; // found this online: replaced if statements

  // if (number === 0) {
  //     value = 'rock';
  // } else if (number === 1) {
  //     value = 'paper';
  // } else {
  //     value = 'scissors';
  // }
  // return value
}

function playGame() {
  while (isgameover == false) {
    compareMoves();
  }
}

function compareMoves(userInput) {
  let computerMove = generateComputerMove();
  console.log(`computer selected ${computerMove}`);

  let humanMove = userInput;
  console.log(`human selected ${humanMove}`);

  switch (userInput + computerMove) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      userWins(userInput, computerMove);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
        userLoses(userInput, computerMove);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
tie(userInput, computerMove);
      break;
  }
}


// old way: better to use switch statement

// if (computerMove === humanMove) {
//     game_update.innerText = `That's a tie! Bot picked ${computerMove}`;
// };

// if (humanMove === 'rock') {
//     if (computerMove === 'scissors') {
//         humanScore++;
//         computerScore--;
//         game_update.innerText = `You win! Bot picked ${computerMove}`
//     } else if (computerMove === 'paper') {
//         computerScore++;
//         humanScore--;
//         game_update.innerText = `You lose! Bot picked ${computerMove}`
//     }
// };
//     if (humanMove === 'paper') {
//         if (computerMove === 'rock') {
//             humanScore++;
//             computerScore--;
//             alert(`You win! Your score: ${humanScore}. Computer score: ${computerScore}`)
//         } else if (computerMove === 'scissors') {
//             computerScore++;
//             humanScore--;
//             alert(`You lose! Your score: ${humanScore}. Computer score: ${computerScore}`)
//         }
//     };

//     if (humanMove === 'scissors') {
//         if (computerMove === 'paper') {
//             humanScore++;

//             alert(`You win! Your score: ${humanScore}. Computer score: ${computerScore}`)
//         } else if (computerMove === 'rock') {
//             // computerScore++;
//             humanScore--;
//             alert(`You lose! Your score: ${humanScore}. Computer score: ${computerScore}`)
//         }
//     };

//     if (humanMove === "quit") {
//         isgameover = true;
//         console.log(`isgameover = ${isgameover}`)
//         if (computerScore > humanScore) {
//             alert(`The winner is the mighty AI. Your score: ${humanScore}, Computer score: ${computerScore}`)
//         } else {
//             alert(`The winner is you! Your score: ${humanScore}, Computer score: ${computerScore}`)
//         }
//     };

