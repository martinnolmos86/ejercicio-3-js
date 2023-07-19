// factorial-while.js
function factorialWhile(num) {
  let factorial = 1;
  let i = 1;
  while (i <= num) {
    factorial *= i;
    i++;
  }
  return factorial;
}

const result = factorialWhile(10);
console.log(`Factorial de 10 usando while: ${result}`);
