var orangeJuiceMain = function (noOfGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var totalGlassJuice = 2 * noOfGuest;
  var myOutputValue = totalGlassJuice * 4;
  return myOutputValue;
};

var paintMain = function (costPerL) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var totalArea = 3 * 3 * 6 * 2;
  var lOfpaint = totalArea / 300;
  var myOutputValue = lOfpaint * costPerL;
  return myOutputValue;
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  var myOutputValue = "you lose";
  // If input matches randomDiceNumber, update output.
  if (
    randomDiceNumber == input ||
    randomDiceNumber + 1 == input ||
    randomDiceNumber - 1 == input
  ) {
    myOutputValue = "you win";
  }

  // Return output.
  return myOutputValue;
};
var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
