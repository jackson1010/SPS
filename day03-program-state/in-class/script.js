var rollDice = function () {
  var randomDiceNumber = Math.floor(Math.random() * 3) + 1;
  return 1;
};

var assignWord = function (input) {
  if (input == 1) {
    return "banana";
  }
  if (input == 2) {
    return "chisel";
  }
  if (input == 3) {
    return "faucet";
  }
};

var points = 2;
var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var randomword = assignWord(rollDice());
  if (input === randomword) {
    points -= 1;
  }
  if (points == 0) {
    var myOutputValue = `You win!`;
  } else {
    myOutputValue =
      "You guessed " +
      input +
      " the secret word is " +
      randomword +
      " you still need " +
      points +
      " points to win";
  }

  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var randomword = assignWord(rollDice());
  if (input === randomword) {
    points -= 1;
  } else points = 2;

  if (points == 0) {
    var myOutputValue = `You win!`;
  } else {
    myOutputValue =
      "You guessed " +
      input +
      " the secret word is " +
      randomword +
      " you still need " +
      points +
      " points to win";
  }
  return myOutputValue;
};

var rollRound = function () {
  var randomNumberRounds = Math.floor(Math.random() * 4) + 2;
  return randomNumberRounds;
};

var newGame = true;
var numberOfRounds = 0;
var numberofCorrectGuess = 0;

var secretWordXRowMain = function (input) {
  var randomword = assignWord(rollDice());
  var standardMsg = `You guessed: ${input}. Secret word: ${randomword}.`;

  if (newGame === true) {
    numberOfRounds = rollRound();
    newGame = false;
  }
  if (input === randomword) {
    numberofCorrectGuess += 1;
    if (numberofCorrectGuess >= numberOfRounds) {
      numberofCorrectGuess = 0;
      newGame = true;
      return `${standardMsg} You guessed correctly ${numberOfRounds} times in a row. You win! Please play again.`;
    }
    var numCorrectGuessesRemainingToWin = numberOfRounds - numberofCorrectGuess;
    return `${standardMsg} You guessed correctly! You need ${numCorrectGuessesRemainingToWin} more correct guess to win.`;
  }
  numberofCorrectGuess = 0;
  return `${standardMsg} You guessed incorrectly. You need ${numberOfRounds} more correct guesses to win.`;
};

var rollDice2 = function () {
  var rollDice2 = Math.floor(Math.random() * 6) + 1;
  return rollDice2;
};

var easyNumber = function () {
  var easierRange = Math.floor(Math.random() * 3) + 1;
  return easierRange;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var randomDiceNumber2 = rollDice2();
  var easierNumber = easyNumber();

  if (Math.abs(randomDiceNumber2 - input) <= easierNumber) {
    var myOutputValue = `You guessed ${input}, Rolled ${randomDiceNumber2}, You Win!`;
  } else
    myOutputValue = `You guessed ${input}, Rolled ${randomDiceNumber2}, You lose!`;
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var randomDiceNumber2 = rollDice2();
  var randomDiceNumber3 = rollDice2();
  var easierNumber = easyNumber();

  if (
    Math.abs(randomDiceNumber2 - input) <= easierNumber ||
    Math.abs(randomDiceNumber3 - input) <= easierNumber
  ) {
    var myOutputValue = `You guessed ${input}, Rolled ${randomDiceNumber2} and ${randomDiceNumber3}, You Win! ${easierNumber}`;
  } else
    myOutputValue = `You guessed ${input}, Rolled ${randomDiceNumber2} and ${randomDiceNumber3}, You lose! ${easierNumber}`;
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
