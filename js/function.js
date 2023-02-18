// Random color
function randomColor() {
  const color = Math.floor(Math.random() * 255);
  return color;
}

function mouseOver(cardId) {
  document
    .getElementById(cardId)
    .addEventListener("mouseenter", function (evt) {
      const colorChange = evt.target;
      colorChange.style.backgroundColor =
        "rgba(" +
        randomColor() +
        "," +
        randomColor() +
        "," +
        randomColor() +
        ")";
    });
}
function mouseOut(cardId) {
    document.getElementById(cardId).addEventListener('mouseleave',function (evt) {
        const colorInitial = evt.target;
        colorInitial.style.backgroundColor = 'initial';
    })
}

// get the title
function getTitle(Id) {
  const title = document.getElementById(Id).innerText;
  return title;
}

// get input value
function getInputValue(Id) {
  const inputValue = document.getElementById(Id).value;
  return inputValue;
}

// validation input
function InputValidate(input1, input2) {
  if (
    isNaN(input1) ||
    isNaN(input2) ||
    input1 === "" ||
    input2 === "" ||
    input1 < 0 ||
    input2 < 0
  ) {
    alert("Please enter a valid input!");
    return false;
  } else {
    return true;
  }
}

// add to area calculation
function addToTable(serial, title, area) {
  const table = document.getElementById("results");
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${serial}. </td>    
        <td class="pr-5">${title}</td>    
        <td class = "pr-5">${area}cm<sup>2</sup></td>    
        <td><button class = "bg-sky-600 text-white rounded-md px-2 my-1 ">Convert to m<sup>2</sup></button></td>    
    `;
  table.appendChild(tr);
}
