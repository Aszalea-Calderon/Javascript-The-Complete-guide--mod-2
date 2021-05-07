const defaultResult = 0;
let currentResult = defaultResult;
//This is a comment! =)

//This grabs the user input
function getUserInput() {
  return parseInt(userInput.value);
}

//Creates output to the page
function createOutput(operator, resultBeforeCal, calNumber) {
  const calcDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calcDescription); //From vendor file
}

//Add functions
function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + +enteredNumber;
  //You could also convert this to a number by using parseInt(userInput.value) rather than using +userInput.value;
  createOutput("+", initialResult, enteredNumber);
}

//Subtract function
function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createOutput("-", initialResult, enteredNumber);
}

//Multiply function
function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createOutput("*", initialResult, enteredNumber);
}

//divide function
function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  //You can use /= to equal divide equal in the same way you use +=
  createOutput("/", initialResult, enteredNumber);
  alert("divide");
}
// addBtn.addEventListener("click", add);

//Event listeners that pull in from vendor
addBtn.addEventListener("click", add);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
subtractBtn.addEventListener("click", subtract);

//Remember that you can use -- or ++ to add or subtract 1 in either direction I.E. currentResult++ would add it
