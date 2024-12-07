let arr =  [1, 2, 3, 4, 5]

let ans  = arr.filter((num) => num % 2 === 0).map((num) => num * 2).reduce((a, b)=> a + b, 0)
console.log(ans) //Output : 12
