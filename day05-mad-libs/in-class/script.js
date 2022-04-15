var getRandomIndex = function (arrayLength) {
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var words = [];
var madLibsAdjectivesMain = function (input) {
  if (input == "create") {
    var index = getRandomIndex(words.length);
    return `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${words[index]} wife.`;
  }
  words.push(input);
  return `You entered ${words}, enter an adjective or type "create" to madlib.`;
};

var mode = "input";
var words2 = [];
var madLibsInputCreateMain = function (input) {
  if (input == "input") {
    mode = "input";
    return `
    You have switched to input mode.<br/><br/>
    Enter an adjective or type "create" to switch to create mode.`;
  }

  if (input == "create") {
    mode = "create";
    return `
    You have switched to create mode.<br/><br/>
    Hit Submit to madlib.`;
  }

  if (mode == "create") {
    var index = getRandomIndex(words2.length);
    return `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${words2[index]} wife.<br> 
    Hit Submit again to madlib or type "input" to switch to input mode.`;
  }

  if (mode == "input" && input.trim() != "") {
    words2.push(input);
    return `You have added ${words2}, enter another adjective or type "create" to madlib. `;
  }
};

var words3 = [];
var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  if (input == "input") {
    mode = "input";
    return `
    You have switched to input mode.<br/><br/>
    Enter an adjective or type "create" to switch to create mode.`;
  }

  if (input == "create") {
    mode = "create";
    return `
    You have switched to create mode.<br/><br/>
    Hit Submit to madlib.`;
  }

  if (mode == "create") {
    var index = getRandomIndex(words3.length);
    return `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${words3[index]} wife.<br> 
    Hit Submit again to madlib or type "input" to switch to input mode.`;
  }

  if (mode == "input") {
    if (input.trim() == "") {
      return `Please input adjectives separated by a space each to fill in our Mad Lib.`;
    }
    var manywords = input.split(" ");
    //for (var counter = 0; counter < manywords.length; counter++) {
    // words3.push(manywords[counter])};
    words3 = words3.concat(manywords);
    return `You have added ${words3}, enter another adjective or type "create" to madlib. `;
  }
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
