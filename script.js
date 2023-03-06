// Your code here
// document.createElement('ul')
// parentElement.appendChild('li')
const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
  //   parentElement.appendChild("td");
}
makeRow();
makeRow();
makeRow();

const button = document.getElementById("add-row");
button.addEventListener("click", makeRow);
