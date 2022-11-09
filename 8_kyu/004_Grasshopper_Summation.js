/*
* 003_Basic_Mathematical_Operations.js
*https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
*
*Sebastian Terleira
*https://twitter.com/SebastianTerlei
==============

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/


// Past Solutions:

var summation = function (num) {
	let result = 0;
for (let i = 1; i <= num; ++i) { 
 var sum = result += i; 
}
return sum;
}

// Other solution: 

function summation(num) {
  return num * (num + 1) / 2
}
