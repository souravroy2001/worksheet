/*

const fruits = ["apple", "banana", "apple", "orange", "banana"];
const frequency = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(frequency); // { apple: 2, banana: 2, orange: 1 }



* Error-Based Debugging: Fix this code:

const chars = "aabbc";
const freq = chars.split("").reduce((acc, char) => {
    acc[char]++;
    return acc; // Bug: Initial value missing
}, {});
console.log(freq);




*/


const chars = "aabbc";
const freq = chars.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc; // Bug: Initial value missing
}, {});
console.log(freq);
