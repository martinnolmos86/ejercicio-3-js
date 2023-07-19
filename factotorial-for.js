// factorial-for.js
function factorialFor(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

const result = factorialFor(10);
console.log(`Factorial de 10 usando for: ${result}`);
