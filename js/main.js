// card - 1
document
  .getElementById("triangle-calculate")
  .addEventListener("click", function () {
    const title = document.getElementById("triangle-title").innerText;
    const triangleBaseInput =
      document.getElementById("triangle-basefield").value;
    
    const triangleHeightInput = document.getElementById("triangle-heightfield").value;
    // sum
    const triangleArea = 0.5 * parseFloat(triangleBaseInput) * parseFloat(triangleHeightInput)

    // add to table 
    const table = document.getElementById('results');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${1}.</td>    
        <td>${title}</td>    
        <td>${triangleArea}cm<sup>2</sup></td>    
        <td><button class = "bg-sky-600">Convert to m<sup>2</sup></button></td>    
    `
    table.appendChild(tr);
  });
