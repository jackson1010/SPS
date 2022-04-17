var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["♥️", "♦️", "♣️", "♠️"];

  // Loop over the suits array
  for (var suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};
// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  for (
    var currentIndex = 0;
    currentIndex < cardDeck.length;
    currentIndex = currentIndex + 1
  ) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
  }
  // Return the shuffled deck
  return cardDeck;
};

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  var shuffledDeck = shuffleCards(makeDeck());
  var drawnCard = shuffledDeck.pop();
  var comCard = shuffledDeck.pop();

  if (comCard.rank < drawnCard.rank) {
    return `Computer Win! <br> You have drawn ${drawnCard.name} of ${drawnCard.suit} and Computer has drawn ${comCard.name} of ${comCard.suit}. `;
  }
  if (comCard.rank > drawnCard.rank) {
    return `You Win! <br> You have drawn ${drawnCard.name} of ${drawnCard.suit} and Computer has drawn ${comCard.name} of ${comCard.suit}. `;
  }
  return `Its a tie! <br> You have drawn ${drawnCard.name} of ${drawnCard.suit} and Computer has drawn ${comCard.name} of ${comCard.suit}. `;
};

var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  var shuffledDeck = shuffleCards(makeDeck());
  var drawnCard = shuffledDeck.pop();
  var comCard = shuffledDeck.pop();

  if (
    (comCard.rank < drawnCard.rank && drawnCard.rank !== 12) ||
    comCard.rank == 12
  ) {
    return `Computer Win! <br> You have drawn ${drawnCard.name} of ${drawnCard.suit} and Computer has drawn ${comCard.name} of ${comCard.suit}. `;
  }
  if (
    (comCard.rank > drawnCard.rank && comCard.rank !== 12) ||
    drawnCard.rank == 12
  ) {
    return `You Win! <br> You have drawn ${drawnCard.name} of ${drawnCard.suit} and Computer has drawn ${comCard.name} of ${comCard.suit}. `;
  }
  return `Its a tie! <br> You have drawn ${drawnCard.name} of ${drawnCard.suit} and Computer has drawn ${comCard.name} of ${comCard.suit}. `;
};

var printCards = function (cards) {
  var returnString = " ";
  // Iterate until cards.length - 1 so we can avoid the extra comma at the end of return string
  for (var i = 0; i < cards.length - 1; i += 1) {
    var currCard = cards[i];
    returnString += `${currCard.name} of ${currCard.suit}, `;
  }
  var lastCard = cards[cards.length - 1];
  returnString += `${lastCard.name} of ${lastCard.suit}`;
  return returnString;
};

var printCards = function (cards) {
  var returnString = "";
  // Iterate until cards.length - 1 so we can avoid the extra comma at the end of return string
  for (var i = 0; i < cards.length - 1; i += 1) {
    var currCard = cards[i];
    returnString += `${currCard.name} of ${currCard.suit}, `;
  }
  var lastCard = cards[cards.length - 1];
  returnString += `${lastCard.name} of ${lastCard.suit}`;
  return returnString;
};

var getIsCardQueen = function (card) {
  return card.rank == 12;
};

var getIsQueenInHand = function (hand) {
  for (var i = 0; i < hand.length; i += 1) {
    var currCard = hand[i];
    if (currCard.rank == 12) {
      return true;
    }
  }
  return false;
};

var shuffledDeck = shuffleCards(makeDeck());
var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  if (input == "") {
    return ` How many numbers of Cards would you like to draw?`;
  }
  var comCard = shuffledDeck.pop();
  var numberOfCards = Number(input);
  var smallestDrawnCard = 14;
  var comStandardMsg = `Computer has drawn ${comCard.name} of ${comCard.suit}.`;
  var playerStandardMsg = "";
  var drawnCard = [];

  for (var count = 0; count < numberOfCards; count++) {
    drawnCard.push(shuffledDeck.pop());
    if (
      (drawnCard[count].rank < smallestDrawnCard && smallestDrawnCard !== 12) ||
      drawnCard[count].rank == 12
    ) {
      smallestDrawnCard = drawnCard[count].rank;
      var playersmallest = ` Your smallest card is ${drawnCard[count].rank} of ${drawnCard[count].suit}.`;
    }
  }
  playerStandardMsg = `Player drew ${printCards(drawnCard)}. <br/>`;

  if (
    (comCard.rank < smallestDrawnCard && smallestDrawnCard !== 12) ||
    comCard.rank == 12
  ) {
    return `Computer Win! <br> ${comStandardMsg} <br> You have drawn ${playerStandardMsg} ${playersmallest}`;
  }
  if (comCard.rank > smallestDrawnCard || smallestDrawnCard == 12) {
    return `You Win! <br> ${comStandardMsg} <br> You have drawn ${playerStandardMsg} ${playersmallest} `;
  }
  return `Its a tie! <br> ${comStandardMsg} <br> You have drawn ${playerStandardMsg} ${playersmallest} `;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var answersAndResponses = {
  yes: "Wow! Me too! I've been working on the Blackjack project. Makes my day!",
  no: "Oh ok, just normally happy ;)",
  maybe: "It seems thinking about coding also brings happiness!"
};

var chatBotSingleMain = function (input) {
  if (input == "") {
    return `Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)`;
  }
  if (answersAndResponses[input]) {
    return answersAndResponses[input];
  }
};

var questionAndAnswerSets = [
  {
    question: " Wow you seem happy today! Have you been coding? (yes/no/maybe)",
    answers: {
      yes:
        "Wow! Me too! I've been working on the Blackjack project. Makes my day!",
      no: "Oh ok, just normally happy ;)",
      maybe: "It seems the very thought of coding makes people happy!"
    }
  },
  {
    question:
      "Do you enjoy coding most during the day, night, or both? (day/night/both)",
    answers: {
      day:
        "Ah yes, when the sun is high in the sky, I can feel its energy too.",
      night: "Under the calm and gentle moon, I also find my focus.",
      both: "Indeed, I could code 24/7 if I didn't have to sleep!"
    }
  }
];
var currAnswerSetNum = 0;
var chatBotMultipleMain = function (input) {
  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];
  if (input == "") {
    return questionAndAnswerSets[currAnswerSetNum].question;
  }
  if (currAnswerSet.answers[input]) {
    // The following algorithm will always generate the next valid index in questionAndAnswerSets
    var nextAnswerSetNum =
      (currAnswerSetNum + 1) % questionAndAnswerSets.length;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetNum];
    currAnswerSetNum = nextAnswerSetNum;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${nextAnswerSet.question} 
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer. ${currAnswerSet.question}`;
};

var userName = "";
var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];

  if (!userName) {
    if (input == "") {
      return `Hey! I'm Robocop. What's your name?`;
    }
    userName = input;
    return `${userName}! What a cool name. <br/><br/> Hey ${userName}, ${currAnswerSet.question}`;
  }

  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];
  if (input == "") {
    return ` ${userName}! ${questionAndAnswerSets[currAnswerSetNum].question}`;
  }
  if (currAnswerSet.answers[input]) {
    // The following algorithm will always generate the next valid index in questionAndAnswerSets
    var nextAnswerSetNum =
      (currAnswerSetNum + 1) % questionAndAnswerSets.length;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetNum];
    currAnswerSetNum = nextAnswerSetNum;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${nextAnswerSet.question} ${nextAnswerSetNum}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName} ${currAnswerSet.question}`;
};

var userAge = "";
var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];

  if (!userName) {
    if (input == "") {
      return `Hey! I'm Zin. What's your name?`;
    }
    userName = input;
    return `${userName}! What a cool name. How old are you?`;
  }
  if (!userAge) {
    if (input == "") {
      return `Hey ${userName}! How old are you?`;
    }
    userAge = input;
    return `Only ${userAge} You are so young! <br/><br/> Hey ${userName}, ${currAnswerSet.question}`;
  }

  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];
  if (input == "") {
    return ` ${userName}! ${questionAndAnswerSets[currAnswerSetNum].question}`;
  }
  if (currAnswerSet.answers[input]) {
    // The following algorithm will always generate the next valid index in questionAndAnswerSets
    var nextAnswerSetNum =
      (currAnswerSetNum + 1) % questionAndAnswerSets.length;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetNum];
    currAnswerSetNum = nextAnswerSetNum;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${nextAnswerSet.question} ${nextAnswerSetNum}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName} ${currAnswerSet.question}`;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
