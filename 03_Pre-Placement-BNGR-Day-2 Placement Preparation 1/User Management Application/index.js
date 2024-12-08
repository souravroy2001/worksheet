let url =
  "https://user-management-applicat-ac79f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

let buttonDiv = document.getElementById("btn");

let getData;
let currentPage = 1;
let limit = 8;

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    getData = data;
    displayData(getData);
  } catch (error) {
    console.log("First Data fetching error ==> ", error);
  }
}

fetchData();

function displayData(data) {

  let start = (currentPage - 1) * limit;
  let end = limit + start;

  let pagination = data.slice(start, end);

  document.getElementById("main").innerHTML = "";

  pagination.forEach((element) => {
    document.getElementById("main").innerHTML += `

        <div>
            <div><img src = ${element.image}/></div>
            <div>
                <h2> <b>Name :</b> ${element.name}</h2>
                    <div>
                        <span><b> Age :</b> ${element.age}</span>
                        <span><b>Role :</b> ${element.role}</span>
                        <span> <b>City :</b> ${element.city}</span>
                    </div>
                <p> <b>Email :</b> ${element.email}</p>
             </div>
        </div>

    `;
  });
  buttonDiv.style.display = "flex";
}

if (buttonDiv) {
  document.querySelector("#previous").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      fetchData();
    }
  });
  document.querySelector("#next").addEventListener("click", () => {
    let totalPage = getData.length / limit;
    if (currentPage < totalPage) {
      currentPage++;
      fetchData();
    }
  });
}

async function showCaseFetch() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    showCard(data);
  } catch (error) {
    console.log("showCaseFetch Data fetching error ==> ", error);
  }
}

showCaseFetch();

function showCard(data) {
  let freq = data.reduce(
    (acc, element) => {
      acc.Admin += element.role === "Admin";
      acc.Viewer += element.role === "Viewer";
      acc.Editor += element.role === "Editor";
      return acc;
    },
    { Admin: 0, Viewer: 0, Editor: 0 }
  );

  document.getElementById("counter").innerHTML = "";
  for (let key in freq) {
    document.getElementById("counter").innerHTML += `

                    <div>
                        <span>${key}</span>
                        <span> ${freq[key]} </span>
                    </div>

            `;
  }
}
