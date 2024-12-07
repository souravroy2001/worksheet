(async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log("Data Fetching Error ===> ", error )
  }
})();

function displayData(data) {
  data.forEach((element) => {
    document.getElementById("root").innerHTML += `
            <div>

                <h2> <b>Name : - </b> ${element.name}</h2>
                <p><b>Username : - </b> ${element.username}</p>
                <p><b>Phone : - </b> ${element.phone}</p>

            </div>
        `;
  });
}
