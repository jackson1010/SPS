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
