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
addBtn.addEventListener("click", add);
