function pattern1(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    let index = 65 + n - i - 1;
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(index + j) + " ";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern1(5));

// E
// D E
// C D E
// B C D E
// A B C D E

function square(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

console.log(square(5));

function pattern2(n) {
  let str = "";
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      str += "*";
    }
    for (let j = 0; j < (n - i) * 2; ++j) {
      str += " ";
    }
    for (let j = i; j > 0; --j) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    for (let j = 0; j < (n - i) * 2 - 2; ++j) {
      str += " ";
    }
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern2(5));

function pattern3(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    for (let j = 0; j < (n - i) * 2 - 2; ++j) {
      str += " ";
    }
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      str += "*";
    }
    for (let j = 0; j < (n - i) * 2; ++j) {
      str += " ";
    }
    for (let j = i; j > 0; --j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern3(5));
