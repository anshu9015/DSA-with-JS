// function checkTwoStringRotation(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   const str3 = str1 + str1;
//   return str3.includes(str2);
// }
// console.log(checkTwoStringRotation("abcde", "edcba"));

function isomorphic1(str1, str2) {
  let map1 = new Map();
  let map2 = new Map();
  let res1 = [];
  let res2 = [];
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; ++i) {
    map1.set(str1[i], (map1.get(str1[i]) || 0) + 1);
    map2.set(str2[i], (map2.get(str2[i]) || 0) + 1);
  }
  for (let values of map1.values()) {
    res1.push(values);
    res1.join(",");
  }
  for (let values of map2.values()) {
    res2.push(values);
    res2.join(",");
  }
  for (let i = 0; i < res1.length; ++i) {
    if (res1[i] !== res2[i]) {
      return false;
    }
  }
  return true;
}
// console.log(isomorphic("egg", "add")); // true
// console.log(isomorphic("foo", "bar")); // false
// console.log(isomorphic("paper", "title")); // true
// console.log(isomorphic("ab", "aa"));
// console.log(isomorphic("aba", "xyz"));
// console.log(isomorphic("abc", "dee")); // your code → true (wrong), expected → false
// // "bbbaaaba"
// // "aaabbbba"
// console.log(isomorphic("bbbaaaba", "aaabbbba"));

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
console.log(isomorphic("egg", "add")); // true
console.log(isomorphic("foo", "bar")); // false
console.log(isomorphic("paper", "title")); // true
console.log(isomorphic("ab", "aa"));
console.log(isomorphic("aba", "xyz"));
console.log(isomorphic("abc", "dee")); // your code → true (wrong), expected → false
// "bbbaaaba"
// "aaabbbba"
console.log(isomorphic("bbbaaaba", "aaabbbba"));

function iso(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map = new Map();
  let set = new Set();
  for (let i = 0; i < str1.length; ++i) {
    let c1 = str1[i];
    let c2 = str2[i];
    if (map.has(c1)) {
      if (map.get(c1) != c2) {
        return false;
      }
    } else {
      if (set.has(c2)) return false;
      map.set(c1, c2);
      set.add(c2);
    }
  }
  return true;
}
console.log(iso("bbbaaaba", "aaabbbba"));

function subString(str, i, j) {
  let arr = str.split("");
  return arr.slice(i, j + 1).join("");
}
console.log(subString("anshu", 1, 4));

function longestOddString(str) {
  for (let i = str.length - 1; i >= 0; --i) {
    if (Number(str[i]) % 2 !== 0) {
      return subString(str, 0, i);
    }
  }
  return "";
}
console.log(longestOddString("35427"));

function longOddString(str) {
  for (let i = str.length - 1; i >= 0; --i) {
    if (Number(str[i]) % 2 !== 0) {
      return str.slice(0, i + 1);
    }
  }
  return "";
}
console.log(longOddString("34257"));

function subString1(str, i, j) {
  return str.slice(i, j + 1);
}
console.log(subString1("anshu", 1, 4));

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(str) {
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
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: s = "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

function outerMostParanthesis(str) {
  let res = "";
  let counter = 0;
  for (let ch of str) {
    if (ch === ")") {
      counter--;
    }
    if (counter !== 0) {
      res += ch;
    }
    if (ch === "(") {
      counter++;
    }
  }
  return res;
}
console.log(outerMostParanthesis("(()())(())"));

function removeOuterParanthesis(str) {
  let ans = "";
  let counter = 0;
  for (let ch of str) {
    if (ch === "(") {
      if (counter > 0) {
        ans += ch;
      }
      counter++;
    } else {
      counter--;
      if (counter > 0) {
        ans += ch;
      }
    }
  }
  return ans;
}
console.log(removeOuterParanthesis("(()())(())"));

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
console.log(leapYear(1900));
console.log(leapYear(2020));

function romanToInteger(str) {
  let map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  let ans = 0;
  for (let i = 0; i < str.length; ++i) {
    if (map.get(str[i]) < map.get(str[i + 1])) {
      ans -= map.get(str[i]);
    } else {
      ans += map.get(str[i]);
    }
  }
  return ans;
}
console.log(romanToInteger("MCMXCIV"));

function romanToInteger1(str) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let ans = 0;
  for (let i = 0; i < str.length; ++i) {
    if (map[str[i]] < map[str[i + 1]]) {
      ans -= map[str[i]];
    } else {
      ans += map[str[i]];
    }
  }
  return ans;
}
console.log(romanToInteger1("MCMXCIV"));

function integerToRoman(num) {
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
  let ans = "";
  for (let i = 0; i < values.length; ++i) {
    while (num >= values[i]) {
      num -= values[i];
      ans += symbols[i];
    }
  }
  return ans;
}
console.log(integerToRoman(1994));
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function sortCharacterByFrequency(str) {
  let map = new Map();
  for (let i = 0; i < str.length; ++i) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  let ans = "";
  let res = [...map.entries()].sort((a, b) => b[1] - a[1]);
  for (let [ch, freq] of res) {
    ans += ch.repeat(freq);
  }
  return ans;
}
console.log(sortCharacterByFrequency("tree"));

function sortCharacterByFrequency1(str) {
  let map = new Map();
  for (let i = 0; i < str.length; ++i) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  let ans = "";
  let buckets = new Array(str.length + 1).fill(null).map(() => []);
  for (let [key, value] of map.entries()) {
    buckets[value].push(key);
  }
  console.log(buckets);
  for (let i = buckets.length - 1; i >= 0; --i) {
    for (let ch of buckets[i]) {
      ans += ch.repeat(i);
    }
  }
  return ans;
}
console.log(sortCharacterByFrequency1("tree"));
