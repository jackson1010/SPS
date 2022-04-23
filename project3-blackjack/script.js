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
        cardName = "Α";
      } else if (cardName == 11) {
        cardName = "♘";
        rankCounter = 10;
      } else if (cardName == 12) {
        cardName = "♕";
        rankCounter = 10;
      } else if (cardName == 13) {
        cardName = "♔";
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
  var noOfAces = 0;
  for (var i = 0; i < cards.length; i += 1) {
    var currCard2 = cards[i];
    if (currCard2.rank == 1) {
      noOfAces += 1;
      score += 11;
    } else {
      score += currCard2.rank;
    }
  }
  if (score > 21 && noOfAces > 0) {
    var aces = 0;
    while (aces < noOfAces) {
      score -= 10;
      if (score <= 21) {
        break;
      }
      aces += 1;
    }
  }
  return score;
};

var drawCards = function () {
  comCard.push(shuffledDeck.pop());
  playerCard.push(shuffledDeck.pop());
  comCard.push(shuffledDeck.pop());
  playerCard.push(shuffledDeck.pop());
  drawncard = true;
};

var BlackJack = function (whichPlayer) {
  if (whichPlayer == "player") {
    return `BLACKJACK!! You win!! 💰💰<br><br> ${playerCardMsg} <br> Your total point is ${playScore} <br><br>Please refresh to play again.`;
  }
  if (whichPlayer == "dealer") {
    return `BLACKJACK!! Dealer win!! 💰💰 <br><br> ${computerCardsMsg} <br> Dealer total point is ${dealerScore} <br><br>Please refresh to play again.`;
  }
};

var generatedMsg = function () {
  return `${computerCardsMsg} <br> Dealer total point is ${dealerScore} <br><br> 
  ${playerCardMsg} <br> Your total point is ${playScore}`;
};

var shuffledDeck = shuffleCards(makeDeck());
var notStand = false;
var drawncard = false;
var gameOver = false;
var comCard = [];
var playerCard = [];
var playerCardMsg = "";
var computerCardsMsg = "";
var playScore = 0;
var dealerScore = 0;

var main = function (input) {
  if (gameOver) {
    return "The game is over. Please refresh to play again.";
  }
  if (drawncard == false) {
    drawCards();
    playScore = countScore(playerCard);
    dealerScore = countScore(comCard);
    playerCardMsg = ` You have drawn ${printCards(playerCard)}`;
    computerCardsMsg = ` Dealer has drawn ${printCards(comCard)}`;

    if (playScore == 21) {
      gameOver = true;
      return BlackJack("player");
    }
    if (dealerScore == 21) {
      gameOver = true;
      return BlackJack("dealer");
    }
    return `${generatedMsg()} <br><br> Would you like to Hit or Stand?`;
  }

  if (!notStand) {
    var choice = input.toLowerCase();
    if (choice !== "hit" && choice !== "stand") {
      return `Please enter Hit or Stand`;
    }
    if (choice == "hit") {
      playerCard.push(shuffledDeck.pop());
      playerCardMsg = `You have drawn ${printCards(playerCard)}`;
      playScore = countScore(playerCard);

      if (playScore > 21) {
        gameOver = true;
        return `Bust💣!! <br> You lose!!😥 <br><br> ${playerCardMsg} <br>Your total point is ${playScore}<br><br>Please refresh to play again.`;
      }
      if (playScore == 21) {
        gameOver = true;
        return BlackJack("player");
      }
      if (playScore < 21) {
        return `${generatedMsg()} <br><br> Would you like to Hit or Stand? <br>`;
      }
    }
    if (input.toLowerCase() === "stand") {
      notStand = true;
    }
  }

  while (dealerScore < 17) {
    comCard.push(shuffledDeck.pop());
    dealerScore = countScore(comCard);
    computerCardsMsg = `Dealer has drawn ${printCards(comCard)}`;

    if (dealerScore == 21) {
      gameOver = true;
      return BlackJack("dealer");
    }
    if (dealerScore > 21) {
      gameOver = true;
      return `Dealer Bust💣!!<br> You Win!! <br><br> ${generatedMsg()} <br><br>Please refresh to play again.`;
    }
  }

  if (dealerScore < playScore) {
    gameOver = true;
    return `You win!! 💰💰 <br><br> ${generatedMsg()} <br><br>Please refresh to play again.`;
  }
  if (dealerScore > playScore) {
    gameOver = true;
    return `You lose!! 😥 <br><br> ${generatedMsg()} <br><br>Please refresh to play again.`;
  }
  gameOver = true;
  return `Its a tie!! 😥 <br><br> ${generatedMsg()} <br><br>Please refresh to play again.`;
};
