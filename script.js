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

function colorize(event) {
  console.log("clicked!");
  const target = event.target;
  if (target.className.length) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}

table.addEventListener("click", colorize);

// function changeColor(event) {
//   console.log(event.target.value);
//   chosenColor = event.target.value;
// }
let chosenColor = "red";

select.addEventListener("change", function (event) {
  chosenColor = event.target.value;
});

function colorize(event) {
  const target = event.target;

  if (target.className.length) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}
