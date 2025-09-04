function countDigit(n) {
  let count = 0;
  while (n !== 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}

console.log(countDigit(12345));

function reverseNumber(n) {
  let reverse = 0;
  while (n !== 0) {
    let r = n % 10;
    n = Math.floor(n / 10);
    reverse = reverse * 10 + r;
  }
  return reverse;
}
console.log(reverseNumber(12345));

function checkPallindrome(n) {
  let reversed = reverseNumber(n);
  if (reversed === n) {
    return true;
  }
  return false;
}

console.log(checkPallindrome(121));

function gcd(a, b) {
  while (a !== 0) {
    let r = b % a;
    b = a;
    a = r;
  }
  return b;
}
console.log(gcd(20, 28));

function gcd1(a, b) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); ++i) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
console.log(gcd(20, 28));

function armstongNumber(n) {
  let count = countDigit(n);
  let temp = n;
  let sum = 0;
  while (n !== 0) {
    let r = n % 10;
    sum = sum + Math.pow(r, count);
    n = Math.floor(n / 10);
  }
  if (sum === temp) {
    return true;
  }
  return false;
}
console.log(armstongNumber(153));

function printDivisor(n) {
  let res = [];
  for (let i = 1; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      res.push(i);
      if (i != n / i) {
        res.push(n / i);
      }
    }
  }
  return res;
}

console.log(printDivisor(36));

function checkPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  }
  return false;
}
console.log(checkPrime(3));

function checkPrime1(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime1(23));
