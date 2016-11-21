var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 == 0) {
    var reduction = numSheep * .75;
    console.log("Removing " + reduction + " sheep from the population.");
    numSheep -= reduction;
  }

  else if (numSheep > 10000) {
    var reduction = numSheep * .5;
    console.log("Removing " + reduction + " sheep from the population.");
    numSheep -= reduction;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
