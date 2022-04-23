var newButton = document.createElement("button");
newButton.innerText = "Hello";
newButton.addEventListener("click", function () {
  console.log("hello, world!");
});
document.body.appendChild(newButton);

var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

//if (playScore < 21) {
// return `${computerCardsMsg} <br> Dealer total point is ${dealerScore} <br><br>
//      ${playerCardMsg} <br> Your total point is ${playScore} <br><br> Would you like to Hit or Stand? <br>`;
//}
//if (playScore == 21) {
// return `BLACKJACK!! You win!! 💰💰 <br>
//     ${playerCardMsg} <br> Your total point is ${playScore}`;
//}
