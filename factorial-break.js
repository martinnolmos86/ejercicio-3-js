// factorial-break.js
function factorialBreak(num) {
  let factorial = 1;
  let i = 1;
  while (true) {
    factorial *= i;
    if (i === num) {
      break;
    }
    i++;
  }
  return factorial;
}

const result = factorialBreak(10);
console.log(`Factorial de 10 usando while y break: ${result}`);
