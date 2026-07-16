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

function subString1(str) {
  return str.slice(0, 5);
}
console.log(subString1("satyamkumar"));

// Input: s = "10203004", queries = [[0,7],[1,3],[4,6]]

// Output: [12340, 4, 9]

// Explanation:

// s[0..7] = "10203004"
// x = 1234
// sum = 1 + 2 + 3 + 4 = 10
// Therefore, answer is 1234 * 10 = 12340.
// s[1..3] = "020"
// x = 2
// sum = 2
// Therefore, the answer is 2 * 2 = 4.
// s[4..6] = "300"
// x = 3
// sum = 3
// Therefore, the answer is 3 * 3 = 9.

function leetcode2(str, queries) {
  let arr = [];
  const MOD = 1000000007;
  for (let i = 0; i < queries.length; ++i) {
    let str1 = 0;
    let sum = 0;
    let word = str.slice(queries[i][0], queries[i][1] + 1);
    for (let j = 0; j < word.length; ++j) {
      if (word[j] !== "0") {
        str1 = (str1 * 10 + Number(word[j])) % MOD;
        sum += Number(word[j]);
      }
    }
    arr.push((str1 * sum) % MOD);
  }
  return arr;
}
console.log(
  leetcode2("10203004", [
    [0, 7],
    [1, 3],
    [4, 6],
  ]),
);
console.log(leetcode2("9876543210", [[0, 9]]));

function sum2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }
  let result = 0;
  while (sum !== 0) {
    let r = sum % 10;
    result += r;
    sum = Math.floor(sum / 10);
  }
  return result;
}
console.log(sum2([9, 9, 8, 7]));

function checkPrime1(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime1(7));

function allPrimeBetween(l, r) {
  let arr = [];
  for (let i = l + 1; i < r; ++i) {
    if (checkPrime1(i)) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(allPrimeBetween(3, 21));

function powerNumber(x, n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; ++i) {
    result *= x;
  }
  return result;
}
console.log(powerNumber(21, 205));

function sumAP(arr) {
  let n = arr.length;
  let d = arr[1] - arr[0];
  let a = arr[0];
  return (n / 2) * (2 * a + (n - 1) * d);
}
console.log(sumAP([1, 3, 5, 7]));

function sumGP(arr) {
  let n = arr.length;
  let r = arr[1] / arr[0];
  let a = arr[0];
  if (r === 1) {
    return a * n;
  }
  let power = powerNumber(r, n);
  return (a * (power - 1)) / (r - 1);
}
console.log(sumGP([2, 4, 8]));
console.log(sumGP([5, 5, 5, 5]));

function printAllDivisor(n) {
  let arr = [];
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(printAllDivisor(36));

function optimizePrintAllDivisor(n) {
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
console.log(optimizePrintAllDivisor(36));

function fibonacciNumber(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  let fib = new Array(n + 1).fill(0);
  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i <= n; ++i) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}
console.log(fibonacciNumber(6));

function fibonacciNumberGet(n) {
  let a = 0;
  let b = 1;
  if (n === 0) {
    return a;
  }
  if (n === 1) {
    return b;
  }
  for (let i = 2; i <= n; ++i) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fibonacciNumberGet(6));

function factorNumber(n) {
  let arr = [];
  for (let i = 1; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      arr.push(i);
      if (i != n / i) {
        arr.push(n / i);
      }
    }
  }
  return arr;
}
console.log(factorNumber(6));

function coPrime(a, b) {
  let count = 0;
  let factorA = factorNumber(a);
  let factorB = factorNumber(b);
  for (let i = 0; i < factorA.length; ++i) {
    if (factorB.includes(factorA[i])) {
      count++;
    }
  }
  if (count === 1) {
    return true;
  }
  return false;
}
console.log(coPrime(8, 9));

function gcd3(a, b) {
  while (a !== 0) {
    let r = b % a;
    b = a;
    a = r;
  }
  return b;
}

function coPrimeCheck(a, b) {
  if (gcd3(a, b) === 1) {
    return true;
  }
  return false;
}
console.log(coPrimeCheck(8, 9));

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortArray([40, 10, 30, 20]));

function findIndexOnSorting(arr) {
  let arr4 = [...arr];
  let arr1 = sortArray(arr);

  let arr3 = [];
  for (let i = 0; i < arr4.length; ++i) {
    arr3.push(arr1.indexOf(arr4[i]) + 1);
  }
  return arr3;
}
console.log(findIndexOnSorting([40, 10, 20, 30]));

function countDigit(N, digit) {
  let count = 0;
  for (let i = 1; i <= N; ++i) {
    let num = i;
    while (num > 0) {
      if (num % 10 === digit) {
        count++;
      }
      num = Math.floor(num / 10);
    }
  }
  return count;
}
console.log(countDigit(25, 2));

function sumOdd(n) {
  let a = 1;
  let d = 2;
  return (n / 2) * (2 * a + (n - 1) * d);
}
console.log(sumOdd(4));

function sumEven(n) {
  let a = 2;
  let d = 2;
  return (n / 2) * (2 * a + (n - 1) * d);
}
console.log(sumEven(4));

function gcd5(a, b) {
  while (a !== 0) {
    let r = b % a;
    b = a;
    a = r;
  }
  return b;
}
console.log("gcd---->>>>", gcd5(16, 0));

function prefixGcd(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; ++i) {
    max = Math.max(max, arr[i]);
  }
  return max;
}
console.log(prefixGcd([2, 4, 6, 8, 3]));

function prefixGcd1(arr) {
  let gcd1;
  let result = [];
  let max = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    max = Math.max(max, arr[i]);
    gcd1 = gcd5(arr[i], max);
    result.push(gcd1);
  }
  result.sort((a, b) => a - b);
  let gcd6;
  let sum = 0;
  for (let i = 0; i < Math.floor(result.length / 2); ++i) {
    gcd6 = gcd5(result[i], result[result.length - 1 - i]);
    sum += gcd6;
  }
  return sum;
}

console.log(prefixGcd1([2, 6, 4]));
console.log(prefixGcd1([3, 6, 2, 8]));
