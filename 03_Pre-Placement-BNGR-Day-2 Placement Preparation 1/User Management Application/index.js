let url =
  "https://user-management-applicat-ac79f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

function freqNumber() {
  let freq = getData.reduce(
    (acc, element) => {
      acc.Admin += element.role === "Admin";
      acc.Viewer += element.role === "Viewer";
      acc.Editor += element.role === "Editor";
      return acc;
    },
    { Admin: 0, Viewer: 0, Editor: 0 }
  );
  return freq;
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

                    <div onclick = show("${key}")>
                        <span>${key}</span>
                        <span> ${freq[key]} </span>
                    </div>

            `;
  }
}

function show(data) {
  window.location.href = `./member.html?${data}`;
}
