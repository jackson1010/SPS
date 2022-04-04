var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var diceOne = rollDice();
  var diceTwo = rollDice();
  var standardMessage = `Dice 1: ${diceOne}. Dice 2: ${diceTwo}.`;
  if (input == diceOne || input == diceTwo || diceOne + diceTwo == 11) {
    return `${standardMessage} You Win!`;
  }
  return `${standardMessage} You lose`;
};

var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  if (
    input.toLowerCase() == "chicken rice" ||
    input.toLowerCase() == "nasi lemak"
  ) {
    return `${input} is a rice dish`;
  }
  if (input.toLowerCase() == "laksa" || input.toLowerCase() == "hokkien mee") {
    return `${input} is a noodle dish`;
  }
  return `${input} is  neither a noolde or rice dish`;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var digit1 = rollDice2();
  var digit2 = rollDice2();
  var digit3 = rollDice2();
  var digit4 = rollDice2();
  var standardMessage = `1st no: ${digit1}. 2nd no: ${digit2}. 3rd no: ${digit3}. 4th no: ${digit4}`;
  if (
    input == digit1 ||
    input == digit2 ||
    input == digit3 ||
    input == digit4
  ) {
    return `${standardMessage} You win!`;
  }
  return `${standardMessage} You lose!`;
};

var rollDice2 = function () {
  return Math.floor(Math.random() * 10);
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.

  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var digit1 = rollDice2();
  var digit2 = rollDice2();
  var digit3 = rollDice2();
  var digit4 = rollDice2();
  var standardMessage = `${digit1}${digit2}${digit3}${digit4}`;
  var result = `${digit1}${digit2}${digit3}${digit4}`;

  if (Math.abs(input - result) < 1000) {
    return `${standardMessage} You Win!`;
  }
  return `${standardMessage} You lose!`;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
