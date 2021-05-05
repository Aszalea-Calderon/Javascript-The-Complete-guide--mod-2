const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}
function createOutput(operator, resultBeforeCal, calNumber) {
  const calcDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + +enteredNumber;
  //You could also convert this to a number by using parseInt(userInput.value) rather than using +userInput.value;
  createOutput("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createOutput("/", initialResult, enteredNumber);
  alert("divide");
}
// addBtn.addEventListener("click", add);
addBtn.addEventListener("click", add);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
subtractBtn.addEventListener("click", subtract);
