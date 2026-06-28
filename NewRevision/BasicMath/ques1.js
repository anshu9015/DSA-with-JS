// Check if a number is even or odd.

// Find the sum of first N natural numbers.

// Find the factorial of a number.

// Check if a number is prime.

function checkEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}
console.log(checkEven(5));

function sumNaturalNumber(n) {
  let sum = 0;
  sum = (n * (n + 1)) / 2;
  return sum;
}
console.log(sumNaturalNumber(5));

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
