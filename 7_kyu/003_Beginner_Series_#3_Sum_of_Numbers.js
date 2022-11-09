/*
* 003_Beginner_Series_#3_Sum_of_Numbers.js
* https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
*
*Sebastian Terleira
*https://twitter.com/SebastianTerlei
*/

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Post solution: 

function getSum(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}

// Other Solution:

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}