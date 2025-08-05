function pattern1(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n - i - 1; ++j) {
      str += " ";
    }
    for (let k = 0; k < i * 2 + 1; ++k) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = n; i > 0; --i) {
    for (let j = n - i; j > 0; --j) {
      str += " ";
    }
    for (let k = 0; k < i * 2 - 1; ++k) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern1(5));

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *


function pattern2(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = n - 1; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
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
// ****
// ***
// **
// *

function pattern3(n) {
  let str = "";
  let start;
  for (let i = 0; i < n; ++i) {
    if (i % 2 !== 0) {
      start = 0;
    } else {
      start = 1;
    }
    for (let j = 0; j < i + 1; ++j) {
      str += start + " ";
      if (start === 0) {
        start = 1;
      } else {
        start = 0;
      }
    }
    str += "\n";
  }
  return str;
}
console.log(pattern3(5));
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

function pattern4(n) {
  let str = "";
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      str += j;
    }
    for (let j = 1; j <= 2 * (n - i); ++j) {
      str += " ";
    }
    for (let j = i; j > 0; --j) {
      str += j;
    }
    str += "\n";
  }
  return str;
}
console.log(pattern4(4));

// 1             1
// 1 2         2 1
// 1 2 3     3 2 1
// 1 2 3 4 4 3 2 1
