let serial = 0;

// card - 1
document
  .getElementById("triangle-calculate")
  .addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("triangle-title").innerText;
    const triangleBaseInput = getInputValue("triangle-basefield");

    const triangleHeightInput = getInputValue("triangle-heightfield");
    // sum
    const triangleArea =
      0.5 * parseFloat(triangleBaseInput) * parseFloat(triangleHeightInput);

    // add to table
    addToTable(serial, title, triangleArea);
  });
