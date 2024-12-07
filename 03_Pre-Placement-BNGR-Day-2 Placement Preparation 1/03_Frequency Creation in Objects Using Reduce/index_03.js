/*

Output-Based Question:

Write a function that takes an array of numbers and returns an object with the count of odd and even numbers.

Input: [1, 2, 3, 4, 5]
Expected Output: { odd: 3, even: 2 }

*/

let arr = [1, 2, 3, 4, 5];

let oddEven = arr.reduce((accumulator, element) => {
  accumulator.even += (element % 2 === 0);
  accumulator.odd += (element % 2 !== 0);
  return accumulator;
}, {odd : 0, even : 0});

console.log(oddEven);
