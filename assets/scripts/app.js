const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + +userInput.value;
  //You could also convert this to a number by using parseInt(userInput.value) rather than using +userInput.value;
  outputResult(currentResult, calDescription);
}
addBtn.addEventListener("click", add);
