const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
add(1, 2);
add(5, 5);

currentResult = add(2, 3);

let calculationDescription = `An error \n` + `An error happened`;

outputResult(currentResult, calculationDescription);
/*Remember to always go back to basics*/
