let count = 1;

document
  .getElementById("triangle-calculate")
  .addEventListener("click", function () {
    inputValidation("triangle-value-b", "triangle-value-h");
    const bInput = inputValue("triangle-value-b");
    const hInput = inputValue("triangle-value-h");

    setInnerText("triangle-b", bInput);
    setInnerText("triangle-h", hInput);

    const triangleCalculate = 0.5 * bInput * hInput;
    if (isNaN(triangleCalculate) || bInput === "" || hInput == "") {
      return;
    }
    createNewElement("result", "triangle", triangleCalculate.toFixed(2), count);
    count++;
  });

document
  .getElementById("rectangle-calculate")
  .addEventListener("click", function () {
    inputValidation("rectangle-value-w", "rectangle-value-l");
    const rectangleW = inputValue("rectangle-value-w");
    const rectangleL = inputValue("rectangle-value-l");

    setInnerText("rectangle-w", rectangleW);
    setInnerText("rectangle-l", rectangleL);

    const rectangleCalculate = rectangleW * rectangleL;
    if (isNaN(rectangleCalculate) || rectangleW === "" || rectangleL == "") {
      return;
    }
    createNewElement(
      "result",
      "rectangle",
      rectangleCalculate.toFixed(2),
      count
    );
    count++;
  });

document
  .getElementById("parallelogram-calculate")
  .addEventListener("click", function () {
    inputValidation("parallelogram-value-b", "parallelogram-value-h");
    const parallelogramW = inputValue("parallelogram-value-b");
    const parallelogramL = inputValue("parallelogram-value-h");

    setInnerText("parallelogram-b", parallelogramW);
    setInnerText("parallelogram-h", parallelogramL);

    const parallelogramCalculate = parallelogramW * parallelogramL;
    if (
      isNaN(parallelogramCalculate) ||
      parallelogramW === "" ||
      parallelogramL == ""
    ) {
      return;
    }
    createNewElement(
      "result",
      "parallelogram",
      parallelogramCalculate.toFixed(2),
      count
    );
    count++;
  });

document
  .getElementById("rhombus-calculate")
  .addEventListener("click", function () {
    inputValidation("rhombus-value-d1", "rhombus-value-d2");
    const rhombusW = inputValue("rhombus-value-d1");
    const rhombusL = inputValue("rhombus-value-d2");

    setInnerText("rhombus-d1", rhombusW);
    setInnerText("rhombus-d2", rhombusL);

    const rhombusCalculate = 0.5 * rhombusW * rhombusL;
    if (isNaN(rhombusCalculate) || rhombusW === "" || rhombusL == "") {
      return;
    }
    createNewElement("result", "rhombus", rhombusCalculate.toFixed(2), count);
    count++;
  });

document
  .getElementById("pentagon-calculate")
  .addEventListener("click", function () {
    inputValidation("pentagon-value-p", "pentagon-value-b");
    const pentagonW = inputValue("pentagon-value-p");
    const pentagonL = inputValue("pentagon-value-b");

    setInnerText("pentagon-p", pentagonW);
    setInnerText("pentagon-b", pentagonL);

    const pentagonCalculate = 0.5 * pentagonW * pentagonL;
    if (isNaN(pentagonCalculate) || pentagonW === "" || pentagonL == "") {
      return;
    }
    createNewElement("result", "pentagon", pentagonCalculate.toFixed(2), count);
    count++;
  });

document
  .getElementById("ellipse-calculate")
  .addEventListener("click", function () {
    inputValidation("ellipse-value-a", "ellipse-value-b");
    const ellipseW = inputValue("ellipse-value-a");
    const ellipseL = inputValue("ellipse-value-b");

    setInnerText("ellipse-a", ellipseW);
    setInnerText("ellipse-b", ellipseL);

    const ellipseCalculate = 3.14 * ellipseW * ellipseL;
    if (isNaN(ellipseCalculate) || ellipseW === "" || ellipseL == "") {
      return;
    }
    createNewElement("result", "ellipse", ellipseCalculate.toFixed(2), count);
    count++;
  });

function inputValidation(id1, id2) {
  const inputField = parseFloat(document.getElementById(id1).value);
  const inputField2 = parseFloat(document.getElementById(id2).value);

  if (inputField <= 0 || inputField2 <= 0) {
    alert("Please enter a Positive number");
    return; // Add this line to stop the function execution
  } else if (isNaN(inputField) || isNaN(inputField2)) {
    alert("Please inter a valid number");
    return;
  } else if (inputField == "" || inputField2 == "") {
    alert("Please insert a number");
    return;
  }
}

function inputValue(id) {
  const inputValue = document.getElementById(id);
  const inputInt = parseFloat(inputValue.value);

  if (isNaN(inputInt)) {
    return inputValue.value;
  }

  inputValue.value = "";

  return inputInt;
}

function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

function createNewElement(id, name, calculation, count) {
  const parentId = document.getElementById(id);
  const result = document.createElement("div");
  result.classList.add(
    "flex",
    "p-5",
    "items-center",
    "justify-between",
    "space-x-3"
  );
  result.innerHTML = `
  <div class="flex space-x-2">
  <p>${count}.</p>
  <p>${name}</p>
</div>
<p>${calculation} cm<sup>2</sup></p>
<button
  type="button"
  href="./blog.html"
  class="bg-blue-500 px-5 py-2 rounded-md text-white font-medium"
  target="_blank"
>
  Convert to m<sup>2</sup>
</button>
  `;
  parentId.appendChild(result);
}

function addRandomBackgroundColorOnHover(className, defaultColor) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    el.addEventListener("mouseover", function () {
      var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.style.transition = "background-color 0.4s ease-in-out";
      this.style.backgroundColor = color;
    });
    el.addEventListener("mouseleave", function () {
      this.style.transition = "background-color 0.4s ease-in-out";
      this.style.backgroundColor = defaultColor;
    });
  }
}

addRandomBackgroundColorOnHover("random-bg", "#fff");
