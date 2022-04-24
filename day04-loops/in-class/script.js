var myOutputValue = "";
var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  while (input >= 0) {
    myOutputValue += "B";
    input -= 1;
  }

  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  for (var i = 0; i < input; i++) {
    for (var j = 0; j < input; j++) {
      myOutputValue += "B";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  for (var i = 0; i < input; i++) {
    for (var j = 0; j < i + 1; j++) {
      myOutputValue += "B";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  for (var i = 0; i < input; i++) {
    for (var j = 0; j < input; j++) {
      if (i == 0 || i == input - 1 || j == 0 || j == input - 1) {
        myOutputValue += "B";
      } else myOutputValue += "E";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  if (input % 2 != 1) {
    return "Please enter an odd number for side length";
  }
  for (var i = 0; i < input; i++) {
    for (var j = 0; j < input; j++) {
      if (i == 0 || i == input - 1 || j == 0 || j == input - 1) {
        myOutputValue += "B";
      } else if (i == Math.floor(input / 2) && j == Math.floor(input / 2)) {
        myOutputValue += "N";
      } else myOutputValue += "E";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var rollDice = function () {
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
};

var mode1 = false;
var numberOfDice = 0;
var numberRoundsPlayed = 0;
var numWin = 0;
var multiDiceBaseMain = function (input) {
  while (mode1 == false) {
    numberOfDice = input;
    mode1 = true;
    return `You have chosen to roll ${numberOfDice} dice. Please enter a single guess for all of these dice.`;
  }
  var userWin = false;
  numberRounds += 1;
  var userGuess = input;
  for (var i = 0; i < numberOfDice; i++) {
    number[i] = rollDice();
    if (number[i] == userGuess) {
      userWin = true;
    }
  }
  if (userWin) {
    numWin += 1;
  }
  mode1 = false;
  var numloss = numberRounds - numWin;
  var msg = `You guessed ${input} and the computer rolled ${number}.`;
  var msg2 = `Your win-loss record is ${numWin}-${numloss}. <br/><br/>
  Please enter a number of dice to roll to start again.
`;

  if (userWin > 0) {
    return `${msg} You win! ${msg2}`;
  }
  // If user has not won, output lose message.
  return `${msg} You lose. ${msg2}`;
};

var GAME_MODE_ENTER_NUM_DICE = "ENTER_NUM_DICE";
var GAME_MODE_ENTER_GUESS = "ENTER_GUESS";

// Initialise game mode to enter num dice mode
var gameMode = GAME_MODE_ENTER_NUM_DICE;

// Keep track of variables needed for a single round
var diceRolls = [];
var hasUserWon = false;
var numDice;

// Keep track of variables needed across multiple rounds
var numRoundsPlayed = 0;
var numWins = 0;
var multiDiceMultiRoundMain = function (input) {
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);

  // Store all dice rolls for each round so user can see how they won or lost.
  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess
  var roundCounter = 0;
  for (var numRounds = 4; roundCounter < numRounds; roundCounter += 1) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to false for this round
    hasUserWon = false;
    // Increment number of rounds the user has played for win loss record
    numRoundsPlayed += 1;

    // Roll numDice number of dice
    for (var diceCounter = 0; diceCounter < numDice; diceCounter += 1) {
      var diceRoll = rollDice();
      // Store the current dice roll in diceRolls to show the user later
      diceRolls.push(diceRoll);
      // If dice roll matches user guess, store that user has won.
      if (diceRoll == userGuess) {
        hasUserWon = true;
      }
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);
    // Increment win counter if user has won
    if (hasUserWon) {
      numWins += 1;
    }
  }

  // After numRounds, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Output result and win-loss record.
  var numLosses = numRoundsPlayed - numWins;
  // .join converts an array to a string where each element is separated by the param to .join.
  return `
    You guessed ${userGuess} and the computer rolled ${diceRollsForEachRound.join(
    " | "
  )}. <br/><br/>
    Your win-loss record is ${numWins}-${numLosses}. <br/><br/>
    Please enter a number of dice to roll to start again.
  `;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
