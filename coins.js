
// First method attempt ----------------
// var numInput = prompt("Please enter an amount, in cents, you'd like converted into coins.<br>Example: 0.63");

// var amount = parseFloat(numInput);

// console.log("amount ,", amount, typeof(amount));

// var penny = 0.01;
// var nickel = 0.05;
// var dime = 0.10;
// var quarter = 0.25;

// var numOfQuarters;
// var numOfDimes;
// var numOfNickels;
// var numOfPennies;

// console.log("amount = ", Number(amount));

// console.log("quarter type ,", typeof(quarter));



// if (amount > quarter) {
  // var numOfQuarters = amount / quarter;
  // console.log("numOfQuarters", Math.floor(numOfQuarters));
  // minusQuarters = parseFloat(amount - (quarter * Math.floor(numOfQuarters)));
  // console.log("minusQuarters = ", minusQuarters, typeof(minusQuarters));
// }

// if (minusQuarters > dime) {
  // var numOfDimes = minusQuarters / dime;
  // console.log("numOfDimes", Math.floor(numOfDimes));
  // minusDimes = parseFloat(minusQuarters - (dime * Math.floor(numOfDimes)));
// }


// console.log("minusDimes = ", minusDimes, typeof(minusDimes));

// if (minusDimes > nickel) {
  // var numOfNickels = minusDimes / nickel;
  // console.log("numOfNickels", Math.floor(numOfNickels));
  // minusNickels = parseFloat(minusDimes - (nickel * Math.floor(numOfNickels)));
// }

// console.log("minusDimes = ", minusDimes, typeof(minusDimes));

// else if (amount >= dime ) {
//   var numOfDimes = amount /= dime;
// }

// else if (amount >= nickel) {
//   var numOfNickels = amount /= nickel;
// }

// else if(amount > penny) {
//   var numOfPennies = amount /= penny;
// }

//First method attempt END --------------


/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var numInput = prompt("Please enter an amount, in cents, you'd like converted into coins.<br>Example: 0.63");

var amount = parseFloat(numInput);

console.log("amount ,", amount, typeof(amount));

var penny = 0.01;
var nickel = 0.05;
var dime = 0.10;
var quarter = 0.25;

  var numOfQuarters = amount / quarter;
  console.log("numOfQuarters", Math.floor(numOfQuarters));
  minusQuarters = parseFloat(amount - (quarter * Math.floor(numOfQuarters)));
  console.log("minusQuarters = ", minusQuarters, typeof(minusQuarters));

  var numOfDimes = minusQuarters / dime;
  console.log("numOfDimes", Math.floor(numOfDimes));
  minusDimes = parseFloat(minusQuarters - (dime * Math.floor(numOfDimes)));

  var numOfNickels = minusDimes / nickel;
  console.log("numOfNickels", Math.floor(numOfNickels));
  minusNickels = parseFloat(minusDimes - (nickel * Math.floor(numOfNickels)));

  var numOfPennies = minusNickels / penny;
  console.log("numOfPennies", Math.floor(numOfPennies));
  minusPennies = parseFloat(minusNickels - (penny * Math.floor(numOfPennies)));







function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = [numOfQuarters, numOfDimes, numOfNickels, numOfPennies]

  return coinPurse;
}

var coins = coinCounter()
console.log();