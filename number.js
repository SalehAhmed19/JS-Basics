var orangePrice = 20;
var chocolate = 0.5;
var applePrice = "26";

console.log(orangePrice + parseInt(applePrice)); // convert to an integer
console.log(orangePrice + parseFloat(chocolate)); // convert to an floating-point number
// If show NaN => Not a number

console.log(typeof orangePrice); // numeric type
console.log(typeof applePrice); // string type

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(parseFloat(total.toFixed(2))); // Fixed the number of digits after decimal point.

const pNum = 50 / 0;
const nNum = -50 / 0;
console.log(pNum);
console.log(nNum);
