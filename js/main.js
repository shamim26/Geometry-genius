// blog-button
document.getElementById("btn-blog").addEventListener('click',function () {
  window.location.href = './questions.html';
})

let serial = 0;

// card - 1
document
  .getElementById("triangle-calculate")
  .addEventListener("click", function () {
    serial += 1;
    // get element
    const title = getTitle("triangle-title");
    const triangleBaseInput = getInputValue("triangle-basefield");
    const triangleHeightInput = getInputValue("triangle-heightfield");
    // sum
    const triangleArea =
      0.5 * parseFloat(triangleBaseInput) * parseFloat(triangleHeightInput);
    const triangleAreaFixed = triangleArea.toFixed(2);
    // validation
    if (!InputValidate(triangleBaseInput, triangleHeightInput)) {
      document.getElementById("triangle-basefield").value = "";
      document.getElementById("triangle-heightfield").value = "";
      return;
    }
    // add to table
    addToTable(serial, title, triangleAreaFixed);
  });

// card - 2
document
  .getElementById("rectangle-calculate")
  .addEventListener("click", function () {
    serial += 1;
    // get element
    const title = getTitle("rectangle-title");
    const rectangleWidthInput = getInputValue("rectangle-widthfield");
    const rectangleLengthInput = getInputValue("rectangle-lenghtfield");
    // sum
    const rectangleArea =
      parseFloat(rectangleWidthInput) * parseFloat(rectangleLengthInput);
    const rectangleAreaFixed = rectangleArea.toFixed(2);
    // validation
    if (!InputValidate(rectangleWidthInput, rectangleLengthInput)) {
      document.getElementById("rectangle-widthfield").value = "";
      document.getElementById("rectangle-lenghtfield").value = "";
      return;
    }
    // add to table
    addToTable(serial, title, rectangleAreaFixed);
  });

// card - 3
document
  .getElementById("parallelogram-calculate")
  .addEventListener("click", function () {
    serial += 1;
    // get element
    const title = getTitle("parallelogram-title");
    const parallelogramBaseInput = getInputValue("parallelogram-basefield");
    const parallelogramHeightInput = getInputValue("parallelogram-heightfield");
    // sum
    const parallelogramArea =
      parseFloat(parallelogramBaseInput) * parseFloat(parallelogramHeightInput);
    const parallelogramAreaFixed = parallelogramArea.toFixed(2);
    // validation
    if (!InputValidate(parallelogramBaseInput, parallelogramHeightInput)) {
      document.getElementById("parallelogram-basefield").value = "";
      document.getElementById("parallelogram-heightfield").value = "";
      return;
    }
    // add to table
    addToTable(serial, title, parallelogramAreaFixed);
  });

// card - 4
document
  .getElementById("rhombus-calculate")
  .addEventListener("click", function () {
    serial += 1;
    // get element
    const title = getTitle("rhombus-title");
    const rhombusD1Input = getInputValue("rhombus-d1field");
    const rhombusD2Input = getInputValue("rhombus-d2field");
    // sum
    const rhombusArea =
      0.5 * parseFloat(rhombusD1Input) * parseFloat(rhombusD2Input);
    const rhombusAreaFixed = rhombusArea.toFixed(2);
    // validation
    if (!InputValidate(rhombusD1Input, rhombusD2Input)) {
      document.getElementById("rhombus-d1field").value = "";
      document.getElementById("rhombus-d2field").value = "";
      return;
    }
    // add to table
    addToTable(serial, title, rhombusAreaFixed);
  });

// card - 5
document
  .getElementById("pentagon-calculate")
  .addEventListener("click", function () {
    serial += 1;
    // get element
    const title = getTitle("pentagon-title");
    const pentagonPerimeterInput = getInputValue("pentagon-perimeterfield");
    const pentagonBaseInput = getInputValue("pentagon-basefield");
    // sum
    const pentagonArea =
      0.5 * parseFloat(pentagonPerimeterInput) * parseFloat(pentagonBaseInput);
    const pentagonAreaFixed = pentagonArea.toFixed(2);

    // validation
    if (!InputValidate(pentagonPerimeterInput, pentagonBaseInput)) {
      document.getElementById("pentagon-perimeterfield").value = "";
      document.getElementById("pentagon-basefield").value = "";
      return;
    }
    // add to table
    addToTable(serial, title, pentagonAreaFixed);
  });

// card - 6
document
  .getElementById("ellipse-calculate")
  .addEventListener("click", function () {
    serial += 1;
    // get element
    const title = getTitle("ellipse-title");
    const ellipseAAxisInput = getInputValue("ellipse-a-axisfield");
    const ellipseBAxisInput = getInputValue("ellipse-b-axisfield");
    // sum
    const ellipseArea =
      3.14 * parseFloat(ellipseAAxisInput) * parseFloat(ellipseBAxisInput);
    const ellipseAreaFixed = ellipseArea.toFixed(2);
    // validation
    if (!InputValidate(ellipseAAxisInput, ellipseBAxisInput)) {
      document.getElementById("ellipse-a-axisfield").value = "";
      document.getElementById("ellipse-b-axisfield").value = "";
      return;
    }
    // add to table
    addToTable(serial, title, ellipseAreaFixed);
  });

/* colors */

// card-1
mouseOver('card1');
mouseOut('card1');
// card-2
mouseOver('card2');
mouseOut('card2');
// card-3
mouseOver('card3');
mouseOut('card3');
// card-4
mouseOver('card4');
mouseOut('card4');
// card-5
mouseOver('card5');
mouseOut('card5');
// card-6
mouseOver('card6');
mouseOut('card6');
