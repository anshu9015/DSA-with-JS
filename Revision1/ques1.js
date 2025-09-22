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
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
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
    for (let j = 0; j < i; ++j) {
      str += " ";
    }
    for (let j = 0; j < 2 * (n - i) - 1; ++j) {
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
    for (let j = 0; j < 2 * i + 1; ++j) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      str += " ";
    }
    for (let j = 0; j < 2 * (n - i) - 1; ++j) {
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
console.log(ques10(5));

function ques11(n) {
  let str = "";
  let count;
  for (let i = 0; i < n; ++i) {
    if (i % 2 === 0) {
      count = 1;
    } else {
      count = 0;
    }
    for (let j = 0; j < i + 1; ++j) {
      str += count + " ";
      if (count === 1) {
        count = 0;
      } else if (count === 0) {
        count = 1;
      }
    }
    str += "\n";
  }
  return str;
}
console.log(ques11(5));

function ques12(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += j + 1;
    }
    for (let j = 0; j < 2 * (n - i) - 2; ++j) {
      str += " ";
    }
    for (let j = i + 1; j > 0; --j) {
      str += j;
    }
    str += "\n";
  }
  return str;
}
console.log(ques12(5));

function ques13(n) {
  let str = "";
  let count = 1;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += count + " ";
      count++;
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
      str += String.fromCharCode(65 + j);
    }
    str += "\n";
  }
  return str;
}
console.log(ques14(5));

function ques15(n) {
  let str = "";
  for (let i = n; i > 0; --i) {
    for (let j = 0; j < i; ++j) {
      str += String.fromCharCode(65 + j);
    }
    str += "\n";
  }
  return str;
}
console.log(ques15(5));

function ques16(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(65 + i);
    }
    str += "\n";
  }
  return str;
}
console.log(ques16(5));

function ques17(n) {
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
console.log(ques17(5));

function ques18(n) {
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
    for (let j = 0; j < 2 * (n - i) - 2; ++j) {
      str += " ";
    }
    for (let j = i + 1; j > 0; --j) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(ques18(5));

function ques19(n) {
  let str = "";
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += "*";
    }
    for (let j = 0; j < 2 * (n - i) - 2; ++j) {
      str += " ";
    }
    for (let j = i + 1; j > 0; --j) {
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
console.log(ques19(5));

function ques20(n) {
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
console.log(ques20(5));

function ques21(n) {
  let str = "";
  let count = n - 1;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i + 1; ++j) {
      str += String.fromCharCode(65 + count + j);
    }
    count--;
    str += "\n";
  }
  return str;
}
console.log(ques21(5));
