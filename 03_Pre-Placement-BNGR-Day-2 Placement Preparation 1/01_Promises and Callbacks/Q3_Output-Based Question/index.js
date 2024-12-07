// (function fetchData() {
//   setTimeout(() => {
//     let first = fetch("https://jsonplaceholder.typicode.com/users");
//     first.then((response) => response.json()).then((data) => console.log(data));
//   }, 1000);
//   setTimeout(() => {
//     let second = fetch("https://jsonplaceholder.typicode.com/posts");
//     second
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }, 1000);
// })()
//   // we can do this

(function fetchData() {
  setTimeout(() => {
    let first = fetch("https://jsonplaceholder.typicode.com/users");
    first
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Data Fetching Time Error ===> ", error));
    let second = fetch("https://jsonplaceholder.typicode.com/posts");
    second
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Data Fetching Time Error ===> ", error));
  }, 1000);
})(); // we can do this
