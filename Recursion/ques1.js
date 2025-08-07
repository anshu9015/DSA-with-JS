function printN(n) {
  if (n === 1) {
    return "1";
  }
  return printN(n - 1) + " " + n;
}

console.log(printN(5));

function printNameN(n) {
  let str = "anshu";
  if (n === 1) {
    return str;
  }
  return printNameN(n - 1) + "\n" + str;
}
console.log(printNameN(5));

function oneToN(n) {
  if (n === 1) {
    return "1";
  }
  return oneToN(n - 1) + "\n" + n;
}

console.log(oneToN(5));

function nToOne(n) {
  if (n === 1) {
    return n;
  }
  return n + "\n" + nToOne(n - 1);
}

console.log(nToOne(5));

function sumNnumber(n) {
  let sum = 0;
  if (n === 1) {
    sum += 1;
    return sum;
  }
  return sumNnumber(n - 1) + n;
}
console.log(sumNnumber(5));

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

function reverseArray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverseArray(arr, start + 1, end - 1);
    return arr;
  }
}
console.log(reverseArray([1, 2, 3, 4, 5], 0, 4));

function pallindromeString(abc) {
  let str = abc.split("").reverse().join("");
  if (str === abc) {
    return true;
  }
  return false;
}
console.log(pallindromeString("aba"));

function recursivePallindrome(i, abc) {
  if (i >= abc.length / 2) return true;
  if (abc[i] !== abc[abc.length - i - 1]) return false;
  return recursivePallindrome(i + 1, abc);
}

console.log(recursivePallindrome(0, "abc"));

function fibonacci(n, a = 0, b = 1, result = "") {
  if (n === 0) {
    return result.trim();
  }
  result += a + " ";
  return fibonacci(n - 1, b, a + b, result);
}
console.log(fibonacci(5));
//learn what is recursion
//types of recursion
//recursion stack
