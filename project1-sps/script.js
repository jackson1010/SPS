var userWin = 0;
var comWin = 0;
var bothDraw = 0;
var playSPS = false;
var userName = "";
var totalGame = 0;
var reverseGame = false;

var main = function (input) {
  if (playSPS == false) {
    if (
      input.toLowerCase() == "scissors" ||
      input.toLowerCase() == "paper" ||
      input.toLowerCase() == "stone"
    ) {
      return "Please enter your name!";
    }
    userName = input;
    playSPS = true;
  }

  var result = objectSPS(rollDice());
  var defaultMsg = msg(input, result);
  if (
    input.toLowerCase() !== "scissors" &&
    input.toLowerCase() !== "paper" &&
    input.toLowerCase() !== "stone" &&
    input.toLowerCase() !== "reversed scissors" &&
    input.toLowerCase() !== "reversed paper" &&
    input.toLowerCase() !== "reversed stone"
  ) {
    return `Hello ${userName} Please input 1 of "scissors", "paper", or "stone" to play the game.`;
  }
  if (
    (input.toLowerCase() === "scissors" && result === "paper") ||
    (input.toLowerCase() === "stone" && result === "scissors") ||
    (input.toLowerCase() === "paper" && result === "stone") ||
    (input.toLowerCase() === "reversed scissors" && result === "stone") ||
    (input.toLowerCase() === "reversed stone" && result === "paper") ||
    (input.toLowerCase() === "reversed paper" && result === "scissors")
  ) {
    userWin += 1;
    totalGame += 1;
    var secondMsg = feedBack();
    return (
      defaultMsg +
      "<br><br>" +
      `You Win!` +
      "<br><br>" +
      "So " +
      userName +
      "," +
      " you've been winning " +
      userWin +
      "/" +
      totalGame +
      secondMsg +
      "<br><br>" +
      'Now you can type "scissors" "paper" or "stone" to play another round!'
    );
  }
  if (
    (input.toLowerCase() === "scissors" && result === "stone") ||
    (input.toLowerCase() === "stone" && result === "paper") ||
    (input.toLowerCase() === "paper" && result === "scissors") ||
    (input.toLowerCase() === "reversed scissors" && result === "paper") ||
    (input.toLowerCase() === "reversed stone" && result === "scissors") ||
    (input.toLowerCase() === "reversed paper" && result === "stone")
  ) {
    comWin += 1;
    totalGame += 1;
    var secondMsg = feedBack();
    return (
      defaultMsg +
      "<br><br>" +
      "Hahah" +
      "<br><br>" +
      "You Lose!" +
      "<br><br>" +
      "So " +
      userName +
      "," +
      " you've been winning " +
      userWin +
      "/" +
      totalGame +
      secondMsg +
      "<br><br>" +
      'Now you can type "scissors" "paper" or "stone" to play another round!'
    );
  }
  bothDraw += 1;
  totalGame += 1;
  var secondMsg = feedBack();
  return (
    defaultMsg +
    "<br><br>" +
    "Draw!" +
    "<br><br>" +
    "So " +
    userName +
    "," +
    " you've been winning " +
    userWin +
    "/" +
    totalGame +
    secondMsg +
    "<br><br>" +
    'Now you can type "scissors" "paper" or "stone" to play another round!'
  );
};

var feedBack = function () {
  var result = Math.floor((userWin * 100) / totalGame);
  if (result >= 75) {
    return " Very Good!";
  }
  if (result >= 50) {
    return " Pretty Good!";
  } else return " Keep on trying!";
};

var rollDice = function () {
  return Math.floor(Math.random() * 3);
};

var objectSPS = function (input) {
  if (input == 0) {
    return "scissors";
  }
  if (input == 1) {
    return "paper";
  }
  return "stone";
};

var generatedIcon = function (generated) {
  if (generated === "scissors") return " ✂️";
  if (generated === "paper") return " 🗒";
  if (generated === "stone") return " 🪨";
};

var inputIcon = function (input) {
  if (input === "scissors" || input === "reversed scissors") return " ✂️";
  if (input === "paper" || input === "reversed paper") return " 🗒";
  if (input === "stone" || input === "reversed stone") return " 🪨";
};

var msg = function (input, result) {
  var gIcon = generatedIcon(result);
  var uIcon = inputIcon(input);
  return (
    ` The computer chose ` +
    result +
    gIcon +
    "<br><br>" +
    `You chose ` +
    input +
    uIcon
  );
};
