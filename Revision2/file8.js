function removeOuterParanthesis(str) {
  let res = "";
  let counter = 0;
  for (let ch of str) {
    if (ch === "(") {
      if (counter > 0) {
        res += ch;
      }
      counter++;
    } else {
      counter--;
      if (counter > 0) {
        res += ch;
      }
    }
  }
  return res;
}
console.log(removeOuterParanthesis("()(()())(())"));

function reverseWord(sentence) {
  let result = "";
  let word = "";
  for (let i = sentence.length - 1; i >= 0; --i) {
    if (sentence[i] === " ") {
      result += word + " ";
      word = "";
    } else {
      word += sentence[i];
    }
  }
  for (let i = 0; i < word.length; ++i) {
    result += word[i];
  }
  return result;
}
console.log(reverseWord("this is anshu"));

function reverseWord1(sentence) {
  let result = "";
  let word = "";
  for (let i = sentence.length - 1; i >= 0; --i) {
    if (sentence[i] === " ") {
      for (let j = word.length - 1; j >= 0; --j) {
        result += word[j];
      }
      word = "";
      result += " ";
    } else {
      word += sentence[i];
    }
  }
  for (let i = word.length - 1; i >= 0; --i) {
    result += word[i];
  }
  return result;
}
console.log(reverseWord1("this is anshu"));

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj = {};
  for (let ele of str1) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  for (let ele of str2) {
    if (!obj[ele]) return false;
    obj[ele]--;
  }
  return true;
}
console.log(anagram("listen", "silent"));

function longestOddString(str) {
  for (let i = str.length - 1; i >= 0; --i) {
    if (str[i] % 2 === 0) {
      continue;
    } else {
      return str.slice(0, i + 1);
    }
  }
}
console.log(longestOddString("213456"));

function longestPrefix(str) {
  let ans = "";
  for (let i = 0; i < str[0].length; ++i) {
    let char = str[0][i];
    let match = true;
    for (let j = 1; j < str.length; ++j) {
      if (i >= str[j].length || char !== str[j][i]) {
        match = false;
        break;
      }
    }
    if (match) {
      ans += char;
    } else {
      break;
    }
  }
  return ans;
}
console.log(longestPrefix(["flower", "fly", "flight"]));

function isomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < str1.length; ++i) {
    let c1 = str1[i];
    let c2 = str2[i];
    if (
      (map1.has(c1) && map1.get(c1) !== c2) ||
      (map2.has(c2) && map2.get(c2) !== c1)
    ) {
      return false;
    }
    map1.set(c1, c2);
    map2.set(c2, c1);
  }
  return true;
}
console.log(isomorphic("paper", "title"));
console.log(isomorphic("foo", "gsd"));

function sortCharacterByFrequency(str) {
  let map = new Map();
  for (let i = 0; i < str.length; ++i) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  let ans = "";
  let res = [...map.entries()].sort((a, b) => b[1] - a[1]);
  for (let [ch, freq] of res) {
    ans += ch;
  }
  return ans.split("");
}
console.log(sortCharacterByFrequency("tree"));

function maximumNestedParanthesis(str) {
  let count = 0;
  let max = -Infinity;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
    }
    max = Math.max(count, max);
  }
  return max;
}
console.log(maximumNestedParanthesis("(1+(2*3)+((8)/4))+1"));
console.log(maximumNestedParanthesis("(1)+((2))+(((3)))"));

function romanToInteger(str) {
  let ans = 0;
  let map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  for (let i = 0; i < str.length; ++i) {
    if (map.get(str[i]) < map.get(str[i + 1])) {
      ans -= map.get(str[i]);
    } else {
      ans += map.get(str[i]);
    }
  }
  return ans;
}
console.log(romanToInteger("IV"));

function integerToRoman(num) {
  let ans = "";
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  for (let i = 0; i < values.length; ++i) {
    while (num >= values[i]) {
      num -= values[i];
      ans += symbols[i];
    }
  }
  return ans;
}
console.log(integerToRoman(1994));

function implementAtoi(str) {
  let i = 0;
  let sign = 1;
  let num = 0;
  const INT_MAX = 2147483647; // 2^31 - 1
  const INT_MIN = -2147483648;
  while (i < str.length && str.charAt(i) === " ") {
    i = i + 1;
  }
  if (i < str.length) {
    if (str.charAt(i) === "-") {
      sign = -1;
      i = i + 1;
    } else if (str.charAt(i) === "+") {
      i = i + 1;
    }
  }
  while (i < str.length && str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
    let digit = Number(str.charAt(i));
    if (num === Math.floor(INT_MAX / 10)) {
      if (sign === 1 && digit >= 7) {
        return INT_MAX;
      } else if (sign === -1 && digit >= 8) {
        return INT_MIN;
      }
    }
    if (num > Math.floor(INT_MAX / 10)) {
      if (sign === 1) {
        return INT_MAX;
      } else {
        return INT_MIN;
      }
    }
    num = num * 10 + digit;
    i = i + 1;
  }
  return sign * num;
}
console.log(implementAtoi(" -1324ddd"));

function beautyString(str) {}
