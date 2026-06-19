function ques1(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      str += "*" + " ";
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
      str += "*" + " ";
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
      str += j + 1 + " ";
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
      str += i + 1 + " ";
    }
    str += "\n";
  }
  return str;
}
console.log(ques4(5));

function ques5(n) {
  let str = "";
  for (let i = n; i > 0; --i) {
    for (let j = i; j > 0; --j) {
      str += "*" + " ";
    }
    str += "\n";
  }
  return str;
}
console.log(ques5(5));

function ques6(n) {
  let str = "";
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      str += j + 1 + " ";
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
    for (let k = 0; k < i * 2 + 1; ++k) {
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
    for (let k = 2 * (n - i) - 1; k > 0; --k) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques8(5));

function ques9(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n - i - 1; ++j) {
      str += " ";
    }
    for (let k = 0; k < 2 * i + 1; ++k) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      str += " ";
    }
    for (let k = 2 * (n - i) - 1; k > 0; --k) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques9(5));

function ques10(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*" + " ";
    }
    str += "\n";
  }
  for (let i = 0; i < n - 1; ++i) {
    for (let j = n - i - 1; j > 0; --j) {
      str += "*" + " ";
    }
    str += "\n";
  }
  return str;
}
console.log(ques10(5));

function ques11(n) {
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
console.log(ques11(5));

function ques12(n) {
  let str = "";
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      str += j;
    }
    for (let j = 2 * (n - i); j > 0; --j) {
      str += " ";
    }
    for (let k = i; k > 0; --k) {
      str += k;
    }
    str += "\n";
  }
  return str;
}
console.log(ques12(4));

function ques13(n) {
  let str = "";
  let index = 1;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += index + " ";
      index++;
    }
    str += "\n";
  }
  return str;
}
console.log(ques13(5));

function ques14(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(65 + j) + " ";
    }
    str += "\n";
  }
  return str;
}
console.log(ques14(5));

function ques15(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n - i; ++j) {
      str += String.fromCharCode(65 + j) + " ";
    }
    str += "\n";
  }
  return str;
}
console.log(ques15(5));

function ques14(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(65 + i) + " ";
    }
    str += "\n";
  }
  return str;
}
console.log(ques14(5));

function ques15(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = n - i - 1; j > 0; --j) {
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
console.log(ques15(4));

function ques16(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    let index = n - i - 1;
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(65 + index + j);
    }
    str += "\n";
  }
  return str;
}
console.log(ques16(5));

function ques17(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = n - i; j > 0; --j) {
      str += "*";
    }
    for (let j = 0; j < 2 * i; ++j) {
      str += " ";
    }
    for (let j = n - i; j > 0; --j) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    for (let j = 2 * (n - i) - 2; j > 0; --j) {
      str += " ";
    }
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques17(5));

function ques18(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    for (let j = 2 * (n - i) - 2; j > 0; --j) {
      str += " ";
    }
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 0; i < n - 1; ++i) {
    for (let j = n - 1 - i; j > 0; --j) {
      str += "*";
    }
    for (let j = 0; j < 2 * i + 2; ++j) {
      str += " ";
    }
    for (let j = n - i - 1; j > 0; --j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques18(5));
