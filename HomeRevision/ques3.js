function printNtimes(n) {
  if (n === 1) {
    return "print";
  }
  return printNtimes(n - 1) + " " + "print";
}
console.log(printNtimes(3));

function printName(n) {
  if (n === 1) {
    return "anshu";
  }
  return printName(n - 1) + " " + "anshu";
}
console.log(printName(5));

function oneToN(n) {
  if (n === 1) {
    return "1";
  }
  return oneToN(n - 1) + n;
}
console.log(oneToN(5));

function NToOne(n) {
  if (n === 1) {
    return "1";
  }
  return n + NToOne(n - 1);
}
console.log(NToOne(5));

function sumNnumber(n) {
  if (n === 1) {
    return 1;
  }
  return sumNnumber(n - 1) + n;
}
console.log(sumNnumber(5));

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
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

function pallindromicString(i, str) {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - i - 1]) return false;
  return pallindromicString(i + 1, str);
}
console.log(pallindromicString(0, "abac"));

function fibonacciRecursion(n, a = 0, b = 1, result = []) {
  if (n === 0) {
    return result;
  }
  result.push(a);
  return fibonacciRecursion(n - 1, b, a + b, result);
}
console.log(fibonacciRecursion(5));
