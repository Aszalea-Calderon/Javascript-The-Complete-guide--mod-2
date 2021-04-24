const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + userInput.value;
}
addBtn.addEventListener("click", add);

let calculationDescription = `An error \n` + `An error happened`;

outputResult(currentResult, calculationDescription);
