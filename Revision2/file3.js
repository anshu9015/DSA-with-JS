function ques1(n) {
  if (n === 1) {
    return "anshu";
  }
  return "anshu" + " " + ques1(n - 1);
}
console.log(ques1(5));

function ques2(n) {
  if (n === 1) {
    return "1";
  }
  return ques2(n - 1) + n;
}
console.log(ques2(5));

function ques3(n) {
  if (n === 1) {
    return "1";
  }
  return n + ques3(n - 1);
}
console.log(ques3(5));

function ques4(n) {
  if (n === 1) {
    return 1;
  }
  return n + ques4(n - 1);
}
console.log(ques4(5));

function ques5(n) {
  if (n === 1) {
    return 1;
  }
  return n * ques5(n - 1);
}
console.log(ques5(5));

function ques6(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    ques6(arr, start + 1, end - 1);
    return arr;
  }
}
console.log(ques6([1, 2, 3, 4, 5], 0, 4));

function ques7(i, str) {
  if (i >= str.length / 2) {
    return true;
  }
  if (str[i] !== str[str.length - i - 1]) {
    return false;
  }
  return ques7(i + 1, str);
}
console.log(ques7(0, "abac"));

function ques8(n, a = 0, b = 1, res = "") {
  if (n === 0) {
    return res;
  }
  res += a + " ";
  return ques8(n - 1, b, a + b, res);
}
console.log(ques8(5));
