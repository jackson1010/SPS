var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var myOutputValue = convertToCelcius(input);
  return myOutputValue;
};

var convertToCelcius = function (input) {
  var celcius = ((input - 32) * 5) / 9;
  return celcius;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  //var miles = convertKmtoMiles(input);
  var totalCost = calculateTotalFuelCost(convertKmtoMiles(input));
  return totalCost;
};

var convertKmtoMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCost = function (tripLengthInMiles) {
  // Some code that calculates total fuel cost
  var fuelCost = (tripLengthInMiles * 2.2) / 9;
  return fuelCost;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var totalCostTrain = calculateTotalFuelCostForComfortable(
    convertKmtoMiles(input),
    2
  );
  var totalCostCar = calculateTotalFuelCostForComfortable(
    convertKmtoMiles(input),
    2.2
  );
  var DiffCost = totalCostCar - totalCostTrain;
  return DiffCost;
};

var calculateTotalFuelCostForComfortable = function (
  tripLengthInMiles,
  costPerLitreofFuel
) {
  // Some code that calculates total fuel cost
  var fuelCost = (tripLengthInMiles * costPerLitreofFuel) / 9;
  return fuelCost;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = noOfCubes(weightOfIceInPound(timeRequired(input)));
  return myOutputValue;
};

var noOfCubes = function (input) {
  var noOfCubes = input * 4 * 2;
  return noOfCubes;
};

var weightOfIceInPound = function (input) {
  var weightOfIceInPound = (input * 1.5 * 1) / 454;
  return weightOfIceInPound;
};

var timeRequired = function (input) {
  var timeRequired = input / 5;
  return timeRequired;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = noOfPintsPerQuater(noOfHalfBK(input));
  return myOutputValue;
};

var noOfPintsPerQuater = function (input) {
  var noOfPints = (input * 2 * 52 * 7) / 4;
  return noOfPints;
};

var noOfHalfBK = function (input) {
  var noOfHalfBK = input / 124;
  return noOfHalfBK;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dataUsage = function (input) {};
