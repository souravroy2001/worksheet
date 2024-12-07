// How does reduce compare to using a for loop for counting frequencies? Discuss performance and readability.


let arr = [1, 2, 3, 4, 5];

let oddEven = arr.reduce((accumulator, element) => {
  accumulator.even += (element % 2 === 0);
  accumulator.odd += (element % 2 !== 0);
  return accumulator;
}, {odd : 0, even : 0});

console.log(oddEven);

let map ={ odd : 0, even : 0}

for(let i = 0; i < arr.length; i++){

    if(arr[i] % 2 === 0) map.even++
    else if(arr[i] % 2 !== 0) map.odd ++
}

console.log(map)


// a : 1, b : 1 we again pass a
