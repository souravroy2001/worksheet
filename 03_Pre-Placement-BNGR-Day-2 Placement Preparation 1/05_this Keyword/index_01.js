const obj = {
  name: "Alice",
  greet: (() => console.log(`Hello, ${this.name}`)).bind({ name: "Alice" }), // Bug: Arrow function doesn't bind `this`,
};

obj.greet();

//Now Idea why not working I tried First Search on google after a long time straggle I searched on ChatGPt still I couldn't
