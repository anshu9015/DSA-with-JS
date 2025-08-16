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

function pattern5(n) {
  let str = "";
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern5(5));

function pattern6(n) {
  let str = "";
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      str += j + 1;
    }
    str += "\n";
  }
  return str;
}
console.log(pattern6(5));

function pattern7(n) {
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
console.log(pattern7(5));

function pattern8(n) {
  let str = "";
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < n - i; ++j) {
      str += " ";
    }
    for (let j = 0; j < 2 * i - 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern8(5));

function pattern9(n) {
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
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < n - i; ++j) {
      str += " ";
    }
    for (let j = 0; j < 2 * i - 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern9(5));

function pattern10(n) {
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
console.log(pattern10(5));

function pattern11(n) {
  let str = "";
  let start;
  for (let i = 0; i < n; ++i) {
    if (i % 2 === 0) {
      start = 1;
    } else {
      start = 0;
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
console.log(pattern11(5));

function pattern12(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += j + 1;
    }
    for (let j = 0; j < (n - i - 1) * 2; ++j) {
      str += " ";
    }
    for (let j = i; j >= 0; --j) {
      str += j + 1;
    }
    str += "\n";
  }
  return str;
}
console.log(pattern12(5));

function pattern13(n) {
  let str = "";
  let index = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += index + 1 + " ";
      index++;
    }
    str += "\n";
  }
  return str;
}
console.log(pattern13(5));

function pattern14(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(65 + j);
    }
    str += "\n";
  }
  return str;
}
console.log(pattern14(5));

function pattern15(n) {
  let str = "";
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      str += String.fromCharCode(65 + j);
    }
    str += "\n";
  }
  return str;
}
console.log(pattern15(5));

function pattern16(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(65 + i);
    }
    str += "\n";
  }
  return str;
}
console.log(pattern16(5));

function pattern17(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n - i - 1; ++j) {
      str += " ";
    }
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(65 + j);
    }
    for (let j = i - 1; j >= 0; --j) {
      str += String.fromCharCode(65 + j);
    }
    str += "\n";
  }
  return str;
}
console.log(pattern17(4));

function pattern18(n) {
  let str = "";
  let index = n - 1;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(65 + index + j);
    }
    index--;
    str += "\n";
  }
  return str;
}

console.log(pattern18(5));

function pattern19(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n - i; ++j) {
      str += "*";
    }
    for (let j = 0; j < 2 * i; ++j) {
      str += " ";
    }
    for (let j = 0; j < n - i; ++j) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    for (let j = 0; j < 2 * (n - i - 1); ++j) {
      str += " ";
    }
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern19(4));

function pattern20(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    for (let j = 0; j < 2 * (n - i - 1); ++j) {
      str += " ";
    }
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n - i; ++j) {
      str += "*";
    }
    for (let j = 0; j < 2 * i; ++j) {
      str += " ";
    }
    for (let j = 0; j < n - i; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern20(5));

function pattern21(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}
console.log(pattern21(5));
