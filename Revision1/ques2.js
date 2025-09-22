function ques1(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(ques1(12345));

function ques2(n) {
  let rem;
  let rev = 0;
  while (n > 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  return rev;
}
console.log(ques2(12345));

function checkPallindrome(n) {
  let rev = n;
  let res = ques2(n);
  if (rev === res) {
    return true;
  }
  return false;
}
console.log(checkPallindrome(123));

function gcd(a, b) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); ++i) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
console.log(gcd(16, 20));

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}
console.log(gcd(20, 25));

function ArmstrongNumber(n) {
  let counting = ques1(n);
  let temp = n;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += Math.pow(rem, counting);
    n = Math.floor(n / 10);
  }
  if (temp === sum) {
    return true;
  }
  return false;
}
console.log(ArmstrongNumber(153));

function printAllDivisor(n) {
  let res = [];
  for (let i = 1; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      res.push(i);
      if (i !== n / i) {
        res.push(n / i);
      }
    }
  }
  return res;
}
console.log(printAllDivisor(16));

function printAllDivisor1(n) {
  let res = [];
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0) {
      res.push(i);
    }
  }
  return res;
}
console.log(printAllDivisor1(16));

function checkPrime(n) {
  let count = 0;
  if (n <= 1) {
    return false;
  }
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
console.log(checkPrime(23));

function checkPrime1(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime1(23));
