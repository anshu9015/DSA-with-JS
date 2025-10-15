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
