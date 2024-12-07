let arr = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];

  arr.sort((a, b) => a.age - b.age);
  console.log(arr); //Ascending order

  arr.sort((a, b) => b.age - a.age);
  console.log(arr); //Descending order
