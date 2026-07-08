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

function checkPrime(n) {
  if (n < 2) return false;
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
console.log(checkPrime(5));

function checkPrime1(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function allPrimeNumber(n) {
  let arr = [];
  for (let i = 1; i <= n; ++i) {
    if (checkPrime1(i)) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(allPrimeNumber(9));

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
  if (a === 0) {
    return b;
  }
  return gcd(a, b % a);
}
console.log(gcd1(20, 28));

function reverseNumber(num) {
  let reverse = 0;
  let r;
  while (num !== 0) {
    r = num % 10;
    num = Math.floor(num / 10);
    reverse = reverse * 10 + r;
  }
  return reverse;
}
console.log(reverseNumber(235));

function countDigit(num) {
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log(countDigit(23543546));

function sumDigit(num) {
  let sum = 0;
  let r;
  while (num !== 0) {
    r = num % 10;
    num = Math.floor(num / 10);
    sum += r;
  }
  return sum;
}
console.log(sumDigit(235));

function armstrongNumber(num) {
  let countNum = countDigit(num);
  let reverse = num;
  let sum = 0;
  while (num !== 0) {
    let r = num % 10;
    num = Math.floor(num / 10);
    sum += Math.pow(r, countNum);
  }
  if (sum === reverse) {
    return true;
  }
  return false;
}
console.log(armstrongNumber(153));

function largestDigit(num) {
  let digit = 0;
  while (num !== 0) {
    let r = num % 10;
    if (r > digit) {
      digit = r;
    }
    num = Math.floor(num / 10);
  }
  return digit;
}
console.log(largestDigit(2346565467921));

function checkPallindrome(num) {
  let reverse = reverseNumber(num);
  if (num === reverse) {
    return true;
  }
  return false;
}
console.log(checkPallindrome(121));

function multiplicationNumber(n) {
  let arr = [];
  for (let i = 1; i <= 10; ++i) {
    arr.push(n * i);
  }
  return arr;
}
console.log(multiplicationNumber(9));

function leetcode(num) {
  let reverse = 0;
  while (num !== 0) {
    let r = num % 10;
    if (r !== 0) {
      reverse = reverse * 10 + r;
    }
    num = Math.floor(num / 10);
  }
  let reverseNumber1 = reverseNumber(reverse);
  let sum = sumDigit(reverseNumber1);
  return sum * reverseNumber1;
}
console.log(leetcode(10203004));
console.log(leetcode(10000));

function LCM(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}
console.log(LCM(12, 20));

function gcd2(a, b) {
  while (a !== 0) {
    let r = b % a;
    b = a;
    a = r;
  }
  return b;
}
console.log(gcd2(12, 20));

function lcm(a, b) {
  let lcm = (a * b) / gcd2(a, b);
  return lcm;
}
console.log(lcm(12, 20));

function perfectSquare(n) {
  for (let i = 1; i <= n; ++i) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
}
console.log(perfectSquare(49));
console.log(perfectSquare(50));
