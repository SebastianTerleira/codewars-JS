/*
* 001_count_by_x.js
*https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
*
*Sebastian Terleira
*https://twitter.com/SebastianTerlei
*/
/*
Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

var isSquare = function(n){
	if (Math.sign(n) === -1) return false;
	let raiz = n ** (1/2);
	let round = Math.round(raiz);
	return (round * round === n  ) ? true : false
}

// Other solution

// function isSquare(n) {
// 	return Math.sqrt(n) % 1 === 0;
// }