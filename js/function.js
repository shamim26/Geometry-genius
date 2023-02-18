// get input value
function getInputValue(Id) {
  const inputValue = document.getElementById(Id).value;
  return inputValue;
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
