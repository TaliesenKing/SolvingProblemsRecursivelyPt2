/***********************************************************************
Write a more advanced version of the recursive `exponent` function that
you just wrote. Instead of multiplying the base number by itself n power of
times, like you did previously, you will be squaring the results of the base
number raised to the power of half of n power.

The following is math, not JavaScript:

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

Remember that you don't need to do anything special to square a number, just
calculate the value and multiply it by itself. So don't cheat and use
exponentiation in your solution.

Examples:

advancedExponent(2, 0); // 1
advancedExponent(2, 1); // 2
advancedExponent(2, 2); // 4
advancedExponent(2, 3); // 8
advancedExponent(2, 4); // 16
advancedExponent(2, 5); // 32
advancedExponent(2, 6); // 64
advancedExponent(2, 7); // 128
advancedExponent(2, 8); // 256
advancedExponent(2, 9); // 512
advancedExponent(2, 10); // 1024
advancedExponent(2, 11); // 2048
advancedExponent(2, 12); // 4096

For each of the examples above, figure out how many times your code should
be recursively calling `advancedExponent`. Find a way to visually see how many
times `advancedExponent` is being recursively called.
***********************************************************************/

const exponent = require("./07-exponent");


function advancedExponent(num, power) {
  //the function shhould handle both positive and negative exponents
  //for even exponents, it should square the result of exponent(num, power / 2).
  //for odd exponents it should multiply the base num by the square of exponent(num, (power - 1) / 2)
  //negative exponents should return the reciprocal of the positive exponent result
  //no built in exponentiation operators (like **)
  //step 1: Base Case
if (power === 0) {
  return 1;
}
  //step 2: If power is negative, compute the reciprocal
if (power < 0) {
  return 1/ advancedExponent(num, -power);
}
  //step 3: if the power is even
if (power % 2 === 0) {
  let halfPower = advancedExponent(num, power / 2);
  return halfPower * halfPower;
}
  //step 4: if the power is odd
else {
  let halfPower = advancedExponent(num, Math.floor(power / 2));
  return num * halfPower * halfPower;
  }

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = advancedExponent;
} catch (e) {
  module.exports = null;
}
