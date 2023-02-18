let serial = 0;

// card - 1
document
  .getElementById("triangle-calculate")
  .addEventListener("click", function () {
    serial += 1;
    const title = getTitle("triangle-title");
    const triangleBaseInput = getInputValue("triangle-basefield");
    const triangleHeightInput = getInputValue("triangle-heightfield");
    // sum
    const triangleArea =
      0.5 * parseFloat(triangleBaseInput) * parseFloat(triangleHeightInput);

    // validation
    if (!InputValidate(triangleBaseInput, triangleHeightInput)) {
      document.getElementById('triangle-basefield').value = '';
      document.getElementById('triangle-heightfield').value = '';
      return;
    }

    // add to table
    addToTable(serial, title, triangleArea);
  });
