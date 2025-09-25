function ques1(str) {
  let newString = "";
  let count = 0;
  for (let i = 0; i < str.length; ++i) {
    const char = str[i];
    if (char === "(") {
      if (count > 0) {
        newString += "(";
      }
      count++;
    } else {
      count--;
      if (count > 0) {
        newString += ")";
      }
    }
  }
  return newString;
}
console.log(ques1("(()())(())"));

function ques2(sentence) {
  let newSentence = "";
  let word = "";
  for (let i = sentence.length - 1; i >= 0; --i) {
    const char = sentence[i];
    if (char === " ") {
      newSentence += word + " ";
      word = "";
    } else {
      word += char;
    }
  }
  for (let i = 0; i < word.length; ++i) {
    newSentence += word[i];
  }
  return newSentence;
}
console.log(ques2("the sky is blue"));

function ques3(sentence) {
  sentence = sentence.trim();
  let newSentence = "";
  let word = "";
  for (let i = sentence.length - 1; i >= 0; --i) {
    const char = sentence[i];
    if (char === " ") {
      if (word.length > 0) {
        for (let j = word.length - 1; j >= 0; --j) {
          newSentence += word[j];
        }
      }
      word = "";
      newSentence += " ";
    } else {
      word += char;
    }
  }
  for (let i = word.length - 1; i >= 0; --i) {
    newSentence += word[i];
  }
  return newSentence.trim();
}
console.log(ques3("  the sky is blue"));

function longOddString(str) {
  for (let i = str.length - 1; i >= 0; --i) {
    if (Number(str[i]) % 2 !== 0) {
      return str.slice(0, i + 1);
    }
  }
  return "";
}
console.log(longOddString("5347"));

function commonPrefix(str) {
  let newString = "";
  for (let i = 0; i < str[0].length; ++i) {
    const char = str[0][i];
    let match = true;
    for (let j = 1; j < str.length; ++j) {
      if (i >= str[j].length || char !== str[j][i]) {
        match = false;
        break;
      }
    }
    if (match) {
      newString += char;
    } else {
      break;
    }
  }
  return newString;
}
console.log(commonPrefix(["flowers", "flow", "fly", "flight"]));

function isomorphicString(str1, str2) {
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
console.log(isomorphicString("egg", "add"));

function isRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const str3 = str1 + str1;
  return str3.includes(str2);
}
console.log(isRotation("abcde", "cdeab"));

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < str1.length; ++i) {
    map.set(str1[i], (map.get(str1[i]) || 0) + 1);
  }
  for (let i = 0; i < str2.length; ++i) {
    if (map.has(str2[i])) {
      map.set(str2[i], map.get(str2[i]) - 1);
      if (map.get(str2[i]) < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
console.log(validAnagram("anagram", "nagaram"));

function sortCharacterByFrequency(str) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < str.length; ++i) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  let res = [...map.entries()].sort((a, b) => b[1] - a[1]);
  for (let [ch, freq] of res) {
    result.push(ch.repeat(freq));
  }
  return result;
}
console.log(sortCharacterByFrequency("raaaajj"));

function countingNestedFrequency(str) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "(") {
      count++;
      max = Math.max(count, max);
    }
    if (str[i] === ")") {
      count--;
    }
  }
  return max;
}
console.log(countingNestedFrequency("(1+(2*3)+((8)/4))+1"));

function romanToInteger(str) {
  const map = {
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
console.log(romanToInteger("XLII"));

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
    if (values[i] <= num) {
      num -= values[i];
      ans += symbols[i];
    }
  }
  return ans;
}
console.log(integerToRoman(1994));

function countSubString(str) {
  const n = str.length;
  return (n * (n + 1)) / 2;
}
console.log(countSubString("tree"));
