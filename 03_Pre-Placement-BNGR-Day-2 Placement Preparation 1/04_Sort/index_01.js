const nums = [1, 10, 2];
nums.sort((a,b)=> a - b); // Bug: Incorrect numeric sorting
console.log(nums); //Ascending order
nums.sort((a,b)=> b - a); // Bug: Incorrect numeric sorting
console.log(nums); //Descending order


