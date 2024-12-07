const calculation = {
  a: 0,
  b: 0,
  c: 0,
  calculate() {
    return this.a + this.b + this.c;
  },
};

let object = { a: 1, b: 2, c: 3 };

console.log(calculation.calculate.call(object))
console.log(calculation.calculate.apply(object))
let getWithBind = calculation.calculate.bind(object)
console.log(getWithBind())
