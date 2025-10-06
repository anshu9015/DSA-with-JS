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
  let reverse = 0;
  let rem;
  while (n > 0) {
    rem = n % 10;
    reverse = reverse * 10 + rem;
    n = Math.floor(n / 10);
  }
  return reverse;
}
console.log(ques2(12345));

function ques3(n) {
  let temp = n;
  let reverse = ques2(n);
  if (temp === reverse) {
    return true;
  }
  return false;
}
console.log(ques3(174));

function ques4(a, b) {
  while (a !== 0) {
    let r = b % a;
    b = a;
    a = r;
  }
  return b;
}
console.log(ques4(16, 20));

function ques5(n) {
  let count = ques1(n);
  let temp = n;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += Math.pow(rem, count);
    n = Math.floor(n / 10);
  }
  if (sum === temp) {
    return true;
  }
  return false;
}
console.log(ques5(153));

function ques6(n) {
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
console.log(ques6(12));

function ques7(n) {
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
console.log(ques7(73));
