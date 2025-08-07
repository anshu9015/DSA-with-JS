function pattern1(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern1(5));
// *****
// *****
// *****
// *****
// *****

function pattern2(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern2(5));

// *
// **
// ***
// ****
// *****

function pattern3(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += j + 1;
    }
    str += "\n";
  }
  return str;
}
console.log(pattern3(5));

// 1
// 12
// 123
// 1234
// 12345

function pattern4(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += i + 1;
    }
    str += "\n";
  }
  return str;
}
console.log(pattern4(5));

// 1
// 22
// 333
// 4444
// 55555
