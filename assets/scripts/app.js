const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  alert(result);
}

currentResult = currentResult + 10;

let calculationDescription = "yo";
let errorMessage = `An error \n` + `An error happened`;

outputResult(currentResult, calculationDescription);
