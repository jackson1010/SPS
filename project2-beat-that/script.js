var rollDice = function () {
  var randomDiceNumber = Math.floor(Math.random() * 6 + 1);
  return randomDiceNumber;
};

var currentPlayer = 1;
var playerDices = [];
var playerNumber = [];
var i = 0;
var j = 0;

var roll2Dice = function () {
  playerDices[i] = rollDice();
  playerDices[i + 1] = rollDice();
  return `Welcome Player ${currentPlayer}<br>
  You rolled ${playerDices[i]} for Dice 1 and ${
    playerDices[i + 1]
  } for Dice 2.<br>
  Choose the order of the dice by entering 1 or 2.`;
};

var choice = function (input) {
  if (input == 1) {
    playerNumber[j] = `${playerDices[i]}${playerDices[i + 1]}`;
  } else playerNumber[j] = `${playerDices[i + 1]}${playerDices[i]}`;
  return `Player ${currentPlayer}, you chose Dice ${input} first.
  Your number is ${playerNumber[j]}.`;
};

var winner = function () {
  if (playerNumber[j - 1] > playerNumber[j]) {
    return ` Congragulation🏆 <br> Player 1 Win<br>
    Player 1's number: ${playerNumber[j - 1]} | Player 2's number: ${
      playerNumber[j]
    } <br>
    Press Submit to play again. <br> ${playerDices}`;
  } else
    return `Congragulation🏆 <br> Player 2 Win <br> 
  Player 1's number: ${playerNumber[j - 1]} | Player 2's number: ${
      playerNumber[j]
    } <br>
  Press Submit to play again. <br> ${playerDices}`;
};

var gameMode = "diceRoll";

var main = function (input) {
  if (gameMode == "diceRoll") {
    var msg = roll2Dice();
    gameMode = "chooseDiceOrder";
    return msg;
  }
  if (gameMode == "chooseDiceOrder") {
    var choiceIndex = Number(input);
    if (choiceIndex !== 1 && choiceIndex !== 2) {
      return `Please choose 1 or 2`;
    }
    var msg2 = choice(choiceIndex);

    if (currentPlayer == 1) {
      j += 1;
      i += 2;
      gameMode = "diceRoll";
      currentPlayer += 1;
      return `${msg2} <br>
     It is now Player ${currentPlayer}'s turn.  Press Submit to roll Player ${currentPlayer}'s dice.`;
    }
  }
  currentPlayer = 1;
  gameMode = "diceRoll";
  i += 2;
  var playerwin = winner();
  return playerwin;
};
