

const url= 'https://valorant-api.com/v1/weapons/skinchromas';

async function fetchPosts() {

  // response from the api that we get from fetching
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })

  return response.json();

}

function printPosts(data) {
  skins = data.data;
  //console.log(skins);
  const tableBody = document.getElementById("body");

  for (let skin of skins) {
    const newRow = document.createElement("tr");
    tableBody.appendChild(newRow);

    const skinName = document.createElement("td");
    skinName.innerHTML = skin.displayName;
    newRow.appendChild(skinName);

    const skinData = document.createElement("td");
    const skinImg = document.createElement("img");
    skinImg.src = skin.displayIcon;
    skinData.appendChild(skinImg);
    newRow.appendChild(skinData);

    const newCost = document.createElement("td");
    newCost.innerHTML = "Not currently available";
    newRow.appendChild(newCost);
  }
}

async function fetchAndPrintPosts() {
  try {
    const data = await fetchPosts();
    printPosts(data);
  } catch(err) {
    console.log(err);
  }
}

fetchAndPrintPosts();