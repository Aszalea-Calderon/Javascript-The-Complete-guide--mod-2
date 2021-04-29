const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + +userInput.value;
  //You could also convert this to a number by using parseInt(userInput.value) rather than using +userInput.value;
  outputResult(currentResult, calculationDescription);
}
addBtn.addEventListener("click", add);

let calculationDescription = `${defaultResult}`;
