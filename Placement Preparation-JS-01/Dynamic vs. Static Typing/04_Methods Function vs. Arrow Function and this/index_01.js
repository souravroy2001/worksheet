// const obj = {
//     name: "JavaScript",
//     getName: () => this.name,
// };
// console.log(obj.getName(obj.name)); // Expected Output: "JavaScript"

const obj = {
  value: 42,
  regular() {
    return this.value;
  },
  arrow: () => (this.value),
};

console.log(obj.arrow());
