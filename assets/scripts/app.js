const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + +enteredNumber;
  //You could also convert this to a number by using parseInt(userInput.value) rather than using +userInput.value;
  outputResult(currentResult, calDescription);
}

function subtract() {
  alert("subtract");
}

function multiply() {
  alert("multiply");
}
function divide() {
  alert("divide");
}
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
subtractBtn.addEventListener("click", subtract);
addBtn.addEventListener("click", add);
