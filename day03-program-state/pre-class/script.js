var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var rollDice = function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  return diceNumber;
};

var appSetupMain = function (input) {
  var randomDiceNumber = rollDice();
  var myOutputValue = "you lose";
  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

var prevRollNumber = 0;
var noOfGames = 0;
var noOfGameswon = 0;

var lastRollNo = function () {
  if (prevRollNumber == 0) {
    return `This is your first roll`;
  }
  return `Your last roll was ` + prevRollNumber;
};

var lastRollMain = function (input) {
  var randomDiceNumber = rollDice();
  var lastRoll = lastRollNo();
  prevRollNumber = randomDiceNumber;

  if (randomDiceNumber == input) {
    var myOutputValue =
      lastRoll +
      `. You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. You win!`;
  }
  var myOutputValue =
    lastRoll +
    `. You just rolled a ` +
    randomDiceNumber +
    `. You guessed ` +
    input +
    `. You lose!`;

  return myOutputValue;
};

var percentage = function () {
  var winlose = Math.floor((noOfGameswon * 100) / noOfGames);
  return `You win ` + winlose + `% of the time`;
};

var winLossMain = function (input) {
  var randomDiceNumber = rollDice();
  noOfGames += 1;
  prevRollNumber = randomDiceNumber;
  var percent = percentage();
  if (randomDiceNumber == input) {
    noOfGameswon += 1;
    percent = percentage();
    var myOutputValue =
      percent +
      `. You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. You win!`;
  }
  var myOutputValue =
    percent +
    `. You just rolled a ` +
    randomDiceNumber +
    `. You guessed ` +
    input +
    `. You lose!`;
  return myOutputValue;
};

var mostArray = [0, 0, 0, 0, 0, 0];

var mostRoll = function (randomDiceNumber) {
  if (randomDiceNumber == 1) {
    mostArray[0] += 1;
  }
  if (randomDiceNumber == 2) {
    mostArray[1] += 1;
  }
  if (randomDiceNumber == 3) {
    mostArray[2] += 1;
  }
  if (randomDiceNumber == 4) {
    mostArray[3] += 1;
  }
  if (randomDiceNumber == 5) {
    mostArray[4] += 1;
  }
  if (randomDiceNumber == 6) {
    mostArray[5] += 1;
  }
};

var countx = 0;

var rolls = function () {
  // var maxNumber = mostArray.indexOf(Math.max(...mostArray)) + 1;
  var maxNumber = Math.max(...mostArray);
  var numberX = mostArray.indexOf(Math.max(...mostArray)) + 1;
  for (let index = 0; index < mostArray.length; index += 1) {
    if (mostArray[index] === maxNumber) {
      countx += 1;
    }
  }
  if (countx > 1) {
    countx = 0;
    return `You don't have a most-rolled dice.`;
  } else {
    countx = 0;
    return `${numberX} is the number you roll the most.`;
  }
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var randomDiceNumber = rollDice();
  mostRoll(randomDiceNumber);
  var msg = rolls();
  if (randomDiceNumber == input) {
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. ` +
      msg +
      ` You guessed ` +
      input +
      `. You win!`;
  } else
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. ` +
      msg +
      ` You guessed ` +
      input +
      `. You lose!`;
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var score = 0;
  var randomDiceNumber = rollDice();
  if (randomDiceNumber == input) {
    score += 2;
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. Your score ` +
      score +
      ` points`;
  } else if (Math.abs(input - randomDiceNumber) == 1) {
    score += 1;
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. Your score ` +
      score +
      ` points`;
  } else
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. You lose!`;
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var score = 0;
  var randomDiceNumber = rollDice();
  if (randomDiceNumber == input) {
    score += 5;
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. Your score ` +
      score +
      ` points`;
  } else if (Math.abs(input - randomDiceNumber) == 4) {
    score += 1;
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. Your score ` +
      score +
      ` points`;
  } else if (Math.abs(input - randomDiceNumber) == 3) {
    score += 2;
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. Your score ` +
      score +
      ` points`;
  } else if (Math.abs(input - randomDiceNumber) == 2) {
    score += 3;
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. Your score ` +
      score +
      ` points`;
  } else if (Math.abs(input - randomDiceNumber) == 1) {
    score += 4;
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. Your score ` +
      score +
      ` points`;
  } else
    var myOutputValue =
      `You just rolled a ` +
      randomDiceNumber +
      `. You guessed ` +
      input +
      `. You lose!`;

  return myOutputValue;
};

var currentGameMode = "waiting for user name";
var bankRoll = 10;
var userName = "";
var mode = "green";

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "";
  if (currentGameMode == "waiting for user name") {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = "dice game";

    myOutputValue = "Hello " + userName;
  } else if (currentGameMode == "dice game") {
    // dice game logic
    var randomDiceRoll = rollDice();
    myOutputValue =
      userName +
      " you lost! you guessed: " +
      input +
      "you rolled: " +
      randomDiceRoll +
      " current bank roll: " +
      bankRoll;

    if (userGuess == randomDiceRoll) {
      bankRoll = bankRoll + 1;
      myOutputValue =
        userName +
        " you won! you guessed: " +
        input +
        "you rolled: " +
        randomDiceRoll +
        " your current bank roll: " +
        bankRoll;
    }
  }
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
