function math1(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(math1(12345));

function reverseNumber(n) {
  let reverse = 0;
  while (n > 0) {
    let r = n % 10;
    n = Math.floor(n / 10);
    reverse = reverse * 10 + r;
  }
  return reverse;
}

console.log(reverseNumber(12345));

function checkPallindrome(n) {
  let checkPallindrome = reverseNumber(n);
  if (n === checkPallindrome) {
    return true;
  }
  return false;
}
console.log(checkPallindrome(123));

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}
console.log(gcd(15, 20));

function gcd1(a, b) {
  let gcd = 1;
  for (let i = 1; i < Math.min(a, b); ++i) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
console.log(gcd1(15, 20));

function armstrong(n) {
  let digit = math1(n);
  let temp = n;
  let sum = 0;
  while (n > 0) {
    sum += Math.pow(n % 10, digit);
    n = Math.floor(n / 10);
  }
  if (sum === temp) {
    return true;
  }
  return false;
}
console.log(armstrong(153));

function printAllDivisor(n) {
  let res = [];
  for (let i = 0; i < Math.sqrt(n); ++i) {
    if (n % i === 0) {
      res.push(i);
      if (i != n / i) {
        res.push(n / i);
      }
    }
  }
  return res;
}
console.log(printAllDivisor(12));

function primeNumber(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeNumber(21));
