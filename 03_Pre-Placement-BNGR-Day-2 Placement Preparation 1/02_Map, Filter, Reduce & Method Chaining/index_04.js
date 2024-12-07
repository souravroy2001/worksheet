let arr = [1, 2, 3, 4, 5];

let forE = arr.forEach((num) => {
  return num;
});

console.log(forE);//undefined


let reduce = arr.reduce((a, b) => {
  return a + b;
}, 0);

console.log(reduce); //15
