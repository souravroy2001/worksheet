/*

Explanation Task:
Explain how method chaining works with an example where you chain map, filter, and reduce. (Expected Duration: 5 minutes.)

*/


let arr = [1, 2, 3, 4, 5]; // 5 10 15 20 25

let sum = arr.map((element)=> element * 5).filter((element)=> element > 5).reduce((a, b)=> a + b, 0)
console.log(sum)
