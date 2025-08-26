function ques1(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques1(5));

function ques2(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques2(5));

function ques3(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += j + 1;
    }
    str += "\n";
  }
  return str;
}
console.log(ques3(5));

function ques4(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += i + 1;
    }
    str += "\n";
  }
  return str;
}
console.log(ques4(5));

function ques5(n) {
  let str = "";
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques5(5));

function ques6(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n - i; ++j) {
      str += j + 1;
    }
    str += "\n";
  }
  return str;
}
console.log(ques6(5));

function ques7(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n - i - 1; ++j) {
      str += " ";
    }
    for (let j = 0; j < 2 * i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques7(5));

function ques8(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += " ";
    }
    for (let j = 0; j < 2 * n - i - 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques8(5));
