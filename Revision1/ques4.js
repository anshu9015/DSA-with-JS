function ques1(n) {
  if (n === 1) {
    return "anshu";
  }
  return ques1(n - 1) + " " + "anshu";
}
console.log(ques1(5));

function print1toN(n) {
  if (n === 1) {
    return "1";
  }
  return print1toN(n - 1) + n;
}
console.log(print1toN(5));

function printnto1(n) {
  if (n === 1) {
    return "1";
  }
  return n + printnto1(n - 1);
}
console.log(printnto1(5));

function sumFirstNNumber(n) {
  if (n === 1) {
    return 1;
  }
  return sumFirstNNumber(n - 1) + n;
}
console.log(sumFirstNNumber(5));

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
    start++;
    end--;
  }
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5], 0, 4));

function pallindrome(i, str) {
  if (i >= str.length / 2) {
    return true;
  }
  if (str[i] !== str[str.length - i - 1]) {
    return false;
  }
  return pallindrome(i + 1, str);
}
console.log(pallindrome(0, "aba"));

function fibonacci(n, a = 0, b = 1, result = "") {
  if (n === 0) {
    return result;
  }
  result += a + " ";
  return fibonacci(n - 1, b, a + b, result);
}
console.log(fibonacci(5));
