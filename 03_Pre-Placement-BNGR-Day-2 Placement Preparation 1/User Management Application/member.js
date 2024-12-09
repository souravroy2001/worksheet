let url =
  "https://user-management-applicat-ac79f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

let getData;
let filterDAta;
let buttonDiv = document.getElementById("btn");

let currentPage = 1;
let limit = 8;

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    getData = data;
    filterDAta = data;
    displayData(filterDAta);
  } catch (error) {}
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
      displayData(filterDAta);
    }
  });
  document.querySelector("#next").addEventListener("click", () => {
    let totalPage = Math.ceil(filterDAta.length / limit);
    if (currentPage < totalPage) {
      currentPage++;
      displayData(filterDAta);
    }
  });
}

let searchInput = document.getElementById("search");

searchInput.addEventListener("input", inputFunction);

let timeID;

function inputFunction() {
  clearTimeout(timeID);

  timeID = setTimeout(() => {
    let value = searchInput.value.toLowerCase();
    showSearchData(value);
  }, 1000);
}

function showSearchData(data) {
  let searchArr = [];
  for (let char of getData) {
    if (
      char.name.toLowerCase().includes(data) ||
      char.role.toLowerCase().includes(data) ||
      char.age.toString().includes(data) ||
      char.email.toLowerCase().includes(data) ||
      char.city.toLowerCase().includes(data)
    ) {
      searchArr.push(char);
    }
  }

  searchArr.length > 0
    ? ((filterDAta = searchArr), (currentPage = 1), displayData(filterDAta))
    : alert("No results found for your search.");
}

const placeHolderText = [
  { text: "Search by Name.." },
  { text: "Search by Role.." },
  { text: "Search by Age.." },
  { text: "Search by Email.." },
  { text: "Search by City.." },
];

var searPlaceHolder = document.getElementById("search");
var index = 0;

(function placeHolderAnimation() {
  if (index < placeHolderText.length) {
    searPlaceHolder.setAttribute(
      "placeholder",
      `${placeHolderText[index].text}`
    );
    index++;
    setTimeout(() => {
      placeHolderAnimation();
    }, 1000);
  } else {
    index = 0;
    setTimeout(() => {
      placeHolderAnimation();
    }, 1000);
  }
})();

let selector = document.getElementById("sort");
selector.addEventListener("change", sortingFunction);

function sortingFunction() {
  let data = null;
  if (selector.value === "asca") {
    data = getData.sort((a, b) => a.age - b.age);
  } else if (selector.value === "desca") {
    data = getData.sort((a, b) => b.age - a.age);
  } else if (selector.value === "ascn") {
    data = getData.sort((a,b) => a.name.localeCompare(b.name));
  } else if (selector.value === "descn") {
    data = getData.sort((a,b) => b.name.localeCompare(a.name));
  }

  data && ((filterDAta = data), (currentPage = 1), displayData(filterDAta));
}
