function createCounter() {
  let counter = 0;
  return {
    increment() {
      counter++;
    },
    reset() {
      counter = 0;
    },
  };
}

// const counter = createCounter();
counter.increment(); // 1
// // counter.increment(); // 2
// // counter.reset(); // 0
