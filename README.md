[![Netlify Status](https://api.netlify.com/api/v1/badges/2b437e93-9d41-42ab-8e3c-b412df89b778/deploy-status)](https://app.netlify.com/sites/practical-meitner-2bf7bd/deploys)

[LIVE WEBSITE](https://rpssoc.netlify.app/)


# Things I learned:

## `If` VS `switch` statements

Originally I had written the logic for keeping score as a long list of `if` statements:

```javascript
function compareMoves() {
  if (computerMove === humanMove) {
    game_update.innerText = `That's a tie! Bot picked ${computerMove}`;
  }
  if (humanMove === "rock") {
    if (computerMove === "scissors") {
      humanScore++;
      game_update.innerText = `You win! Bot picked ${computerMove}`;
    } else if (computerMove === "paper") {
      computerScore++;
      game_update.innerText = `You lose! Bot picked ${computerMove}`;
    }
  }
  if (humanMove === "paper") {
    if (computerMove === "rock") {
      humanScore++;
    } else if (computerMove === "scissors") {
      computerScore++;
    }
  }

  if (humanMove === "scissors") {
    if (computerMove === "paper") {
      humanScore++;
    } else if (computerMove === "rock") {
      computerScore++;
    }
  }
}
```

After looking at some code online and another tutorial, I realised that in this case it would be better to use `switch` statements instead. What was **REALLY** interesting was that the switch statement should take **TWO EXPRESSIONS** and have the value for each expression combined in each case.... crazy! 🤯

```javascript
function compareMoves(userInput) {
  let computerMove = generateComputerMove();
  let humanMove = userInput;

  switch (userInput + computerMove) {
    case "rockscissors":   // this was so cool!
    case "paperrock":
    case "scissorspaper":
      userWins(userInput, computerMove);
      break;
```

## Better way of generating computer move

Initially I just generated the range of numbers, and then went through three `if` statements in order to assign a value of rock, paper or scissors to each random number.

```javascript
function generateComputerMove() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (number === 0) {
    value = "rock";
  } else if (number === 1) {
    value = "paper";
  } else {
    value = "scissors";
  }
  return value;
}
```

I am not sure what this type of syntax is called, but after looking online I realised I can put the `randomNumber` in brackets `[]` instead. Still not sure how it actually works but it works and makes the code shorter:

```javascript
function generateComputerMove() {
  let moves = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return moves[randomNumber];
}
```

## Applying classes to user input!!

From an online tutorial I found out you can add a class to a function parameter (in this case `human`). I also learned about the `setTimeout()` function to remove or add things after a certain time period.

```javascript
function userWins(human, computer) {
  document.getElementById(human).classList.add('green-glow');
  setTimeout(function () {
    document.getElementById(human).classList.remove('green-glow') }, 500);
```

Overall I learned a lot, just wish I wasn't so stressed out over it!
