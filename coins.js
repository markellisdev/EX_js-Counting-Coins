
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

var coinPurse = {
  numOfQuarters:0, numOfDimes:0, numOfNickels:0, numOfPennies:0
}

var penny = 0.01;
var nickel = 0.05;
var dime = 0.10;
var quarter = 0.25;

function coinCounter () {


  coinPurse.numOfQuarters = Math.floor(amount / quarter);
  console.log("numOfQuarters", Math.floor(coinPurse.numOfQuarters));
  minusQuarters = parseFloat(amount - (quarter * Math.floor(coinPurse.numOfQuarters)));
  console.log("minusQuarters = ", minusQuarters, typeof(minusQuarters));

  coinPurse.numOfDimes = Math.floor(minusQuarters / dime);
  console.log("coinPurse.numOfDimes", Math.floor(coinPurse.numOfDimes));
  minusDimes = parseFloat(minusQuarters - (dime * Math.floor(coinPurse.numOfDimes)));

  coinPurse.numOfNickels = Math.floor(minusDimes / nickel);
  console.log("coinPurse.numOfNickels", Math.floor(coinPurse.numOfNickels));
  minusNickels = parseFloat(minusDimes - (nickel * Math.floor(coinPurse.numOfNickels)));

  coinPurse.numOfPennies = Math.floor(minusNickels / penny);
  console.log("coinPurse.numOfPennies", Math.floor(coinPurse.numOfPennies));
  minusPennies = parseFloat(minusNickels - (penny * Math.floor(coinPurse.numOfPennies)));

  document.getElementById("coinCounter").innerHTML = ("To get the amount you entered, $" + amount + ",<br><br>you'll need " + coinPurse.numOfQuarters + " quarter(s),<br>" + coinPurse.numOfDimes + " dime(s),<br>" + coinPurse.numOfNickels + " nickel(s),<br>" + coinPurse.numOfPennies + " pennies.");
}

coinCounter();






// function coinCounter () {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = [numOfQuarters, numOfDimes, numOfNickels, numOfPennies]

//     document.getElementById("coinCounter").innerHTML = numOfQuarters[0];
//   return coinPurse;
// }

// var coins = coinCounter()
console.log("coinPurse", coinPurse);


















