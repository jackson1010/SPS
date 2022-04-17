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
    for (var counter = 1; counter <= 13; counter += 1) {
      // By default, the card name is the same as rankCounter
      var rankCounter = counter;
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
        rankCounter = 10;
      } else if (cardName == 12) {
        cardName = "queen";
        rankCounter = 10;
      } else if (cardName == 13) {
        cardName = "king";
        rankCounter = 10;
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

var printCards = function (cards) {
  var returnString = "";
  // Iterate until cards.length - 1 so we can avoid the extra comma at the end of return string
  for (var i = 0; i < cards.length - 1; i += 1) {
    var currCard = cards[i];
    returnString += `${currCard.name} of ${currCard.suit}, `;
  }
  var lastCard = cards[cards.length - 1];
  returnString += `${lastCard.name} of ${lastCard.suit}.`;
  return returnString;
};

var countScore = function (cards) {
  var score = 0;
  for (var i = 0; i < cards.length; i += 1) {
    var currCard2 = cards[i];
    score += currCard2.rank;
  }
  return score;
};

var comCard = [];
var playerCard = [];
var shuffledDeck = shuffleCards(makeDeck());
var hitOrstand = "";
var drawncard = false;
var playerStandardMsg = "";
var playerStandardMsg2 = "";
var playScore = 0;
var comScore = 0;

var main = function (input) {
  var count = 2;

  if (drawncard == false) {
    comCard[0] = shuffledDeck.pop();
    playerCard[0] = shuffledDeck.pop();
    comCard[1] = shuffledDeck.pop();
    playerCard[1] = shuffledDeck.pop();
    drawncard = true;
    playerStandardMsg = printCards(playerCard);
    playScore = countScore(playerCard);
    return `You have drawn ${playerStandardMsg} <br> Your total point is ${playScore} <br> Would you like to Hit or Stand?  `;
  }

  if (hitOrstand !== "stand") {
    if (input == "") {
      return `Type Hit or Stand`;
    }
    var choice = input.toLowerCase();
    if (choice == "hit") {
      playerCard[count] = shuffledDeck.pop();
      playerStandardMsg2 += `${playerCard[count].name} of ${playerCard[count].suit} `;
      count += 1;
      playScore = countScore(playerCard);
      return `You have drawn ${playerStandardMsg} <br> You hit ${playerStandardMsg2} <br> Your total point is ${playScore} <br>
        Would you like to Hit or Stand? `;
    }
  }
};
