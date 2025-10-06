// Reverse a string

// "anshu" => "uhsna"
// "this is anshu" => "anshu is this"
// "this is anshu" => "siht si uhsna"
// "this is anshu" => "uhsna si siht"

function reverseWord(str) {
  let reverseWord = "";
  for (let i = str.length - 1; i >= 0; --i) {
    reverseWord += str[i];
  }
  return reverseWord;
}
console.log(reverseWord("anshu"));

function reverseSentence(sentence) {
  let result = "";
  let word = "";
  for (let i = sentence.length - 1; i >= 0; --i) {
    const char = sentence[i];
    if (char === " ") {
      for (let j = word.length - 1; j >= 0; --j) {
        result += word[j];
      }
      word = "";
      result += " ";
    } else {
      word += char;
    }
  }
  for (let i = word.length - 1; i >= 0; --i) {
    result += word[i];
  }
  return result;
}
console.log(reverseSentence("this is anshu"));

function reverseSentenceReverseEachWord(sentence) {
  let result = "";
  let word = "";
  for (let i = sentence.length - 1; i >= 0; --i) {
    const char = sentence[i];
    if (char === " ") {
      for (let j = 0; j < word.length; ++j) {
        result += word[j];
      }
      word = "";
      result += " ";
    } else {
      word += char;
    }
  }
  for (let i = 0; i < word.length; ++i) {
    result += word[i];
  }
  return result;
}

console.log(reverseSentenceReverseEachWord("this is anshu"));

function sentenceReverseEachWord(sentence) {
  let result = "";
  let word = "";
  for (let i = 0; i < sentence.length; ++i) {
    const char = sentence[i];
    if (char === " ") {
      for (let j = word.length - 1; j >= 0; --j) {
        result += word[j];
      }
      word = "";
      result += " ";
    } else {
      word += char;
    }
  }
  for (let i = word.length - 1; i >= 0; --i) {
    result += word[i];
  }
  return result;
}
console.log(sentenceReverseEachWord("this is anshu"));

// Check if a string is a palindrome

function reverseString(str1) {
  let str = str1.split("");
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    [str[start], str[end]] = [str[end], str[start]];
    start++;
    end--;
  }
  return str.join("");
}

console.log(reverseString("anshu"));

function checkPallindrome(str) {
  let str1 = reverseString(str);
  if (str1 === str) {
    return true;
  }
  return false;
}
console.log(checkPallindrome("abc"));

// Count vowels and consonants in a string

function countVowelsConsonants(str) {
  let vowels = "aeiouAEIOU";
  let count_vowels = 0;
  let count_consonants = 0;
  for (let val of str) {
    if (/[A-Za-z]/.test(val)) {
      //   if (
      //     val === "a" ||
      //     val === "e" ||
      //     val === "i" ||
      //     val === "o" ||
      //     val === "u" ||
      //     val === "A" ||
      //     val === "E" ||
      //     val === "I" ||
      //     val === "O" ||
      //     val === "U"
      //   )
      if (vowels.includes(val)) {
        count_vowels++;
      } else {
        count_consonants++;
      }
    }
  }
  return { count_vowels, count_consonants };
}
console.log(countVowelsConsonants("examinationAA RAHA HAIi"));

// Check if two strings are anagrams

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let newMap = new Map();
  for (let i = 0; i < str1.length; ++i) {
    newMap.set(str1[i], (newMap.get(str1[i]) || 0) + 1);
  }
  for (let i = 0; i < str2.length; ++i) {
    if (newMap.has(str2[i])) {
      newMap.set(str2[i], newMap.get(str2[i]) - 1);
      if (newMap.get(str2[i]) < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(anagram("silent", "listenw"));

// Remove duplicate characters from a string

function removeDuplicate(str) {
  let uniqueString = "";
  for (let i = 0; i < str.length; ++i) {
    if (!uniqueString.includes(str[i])) {
      uniqueString += str[i];
    }
  }
  return uniqueString;
}

console.log(removeDuplicate("abcda"));

// Find the first non-repeating character

function nonRepeating(str) {
  let newMap = new Map();
  for (let i = 0; i < str.length; ++i) {
    newMap.set(str[i], (newMap.get(str[i]) || 0) + 1);
  }
  for (let key of newMap.keys()) {
    if (newMap.get(key) === 1) {
      return key;
    }
  }
  return -1;
}
console.log(nonRepeating("swiss"));

// Count the number of words in a string

function wordLength(str) {
  let count = 0;
  for (let val of str) {
    // if (val) {
    count++;
    // }
  }
  return count;
}

console.log(wordLength("anshu"));

// Check if a string has all unique characters
function checkAllUnique(str) {
  let uniqueString = "";
  for (let val of str) {
    if (!uniqueString.includes(val)) {
      uniqueString += val;
    }
  }
  if (uniqueString.length === str.length) {
    return true;
  }
  return false;
}
console.log(checkAllUnique("abcda"));

function checkAllUniqueCharacter(str) {
  const freq = new Array(256).fill(0);
  for (let i = 0; i < str.length; ++i) {
    let code = str.charCodeAt(i);
    if (freq[code] === 1) {
      return false;
    }
    freq[code] = 1;
  }
  return true;
}
console.log(checkAllUniqueCharacter("abcd"));

// Count the frequency of each character in a string

function frequencyCharacter(str) {
  let newMap = new Map();
  let str1 = "";
  for (let val of str) {
    newMap.set(val, (newMap.get(val) || 0) + 1);
  }
  for (let [key, value] of newMap.entries()) {
    str1 += `${key} - ${value}` + " ";
  }
  return str1;
}
console.log(frequencyCharacter("anshu"));

// Check if two strings are rotations of each other
function checkTwoStringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let doubledString = str1 + str1;
  return doubledString.includes(str2);
}

console.log(checkTwoStringRotation("abcd", "dabc"));

function checkROtation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let doubledString = str1 + str1;
  for (let i = 0; i < doubledString.length - str1.length; ++i) {
    let match = true;
    for (let j = 0; j < str2.length; ++j) {
      if (doubledString[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}
console.log(checkROtation("abcd", "bcda"));
console.log(checkROtation("abcd", "dcba"));

function checkSubSequence(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; ++i) {
    if (str1[i] === str2[count]) {
      count++;
    }
  }
  return count === str2.length;
}

console.log(checkSubSequence("abcda", "bcd"));

// Print all substrings of a string
function printSubString(str) {
  const arr = str.split("");
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j < arr.length; ++j) {
      let temp = arr.slice(i, j + 1);
      res.push(temp.join(""));
    }
  }
  return res;
}

console.log(printSubString("abc"));

// Find the most frequent character in a string

function mostFrequentCharacter(str) {
  let newMap = new Map();
  let max = -Infinity;
  let ans = null;
  for (let i = 0; i < str.length; ++i) {
    let value = (newMap.get(str[i]) || 0) + 1;
    newMap.set(str[i], value);
    if (value > max) {
      max = value;
      ans = str[i];
    }
  }
  //   let max = -Infinity;
  //   let ans = null;
  //   for (let [key, value] of newMap.entries()) {
  //     if (value > max) {
  //       max = value;
  //       ans = key;
  //     }
  //   }
  return ans;
}

console.log(mostFrequentCharacter("abcas"));

// Convert a string to a character array

function convertStringToArray(str) {
  let res = [];
  for (let val of str) {
    res.push(val);
  }
  return res;
}

console.log(convertStringToArray("abcs"));

// Capitalize the first letter of each word

function toUpperCase(str) {
  let result = "";
  //   for (let i = 0; i < str.length; ++i) {
  let code = str.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    let char = String.fromCharCode(code - 32);
    result += char;
  }
  for (let i = 1; i < str.length; ++i) {
    result += str[i];
  }
  //   }
  return result;
}

console.log(toUpperCase("anshu"));

// Count number of uppercase and lowercase letters

function countUpperLower(str) {
  let count_lower = 0;
  let count_upper = 0;
  for (let i = 0; i < str.length; ++i) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      count_lower++;
    } else {
      count_upper++;
    }
  }
  return { count_lower, count_upper };
}

console.log(countUpperLower("anshudfAASGSDSDWS"));

// Find the length of the shortest and longest word in a string

function longestShortestWord(sentence) {
  let max = -Infinity;
  let min = Infinity;
  let count = 0;
  for (let i = 0; i <= sentence.length; ++i) {
    const char = sentence[i] || " ";
    if (char === " ") {
      if (count > max) {
        max = count;
      }
      if (count < min) {
        min = count;
      }
      count = 0;
    } else {
      count++;
    }
  }
  return { max, min };
}

console.log(longestShortestWord("this is anshu s"));

// Check if a string contains only digits
function checkOnlyDigit(str) {
  let count = 0;
  for (let i = 0; i < str.length; ++i) {
    let code = str.charCodeAt(i);
    if (!(code >= 65 && code <= 122)) {
      count++;
    }
  }
  if (count === str.length) {
    return true;
  }
  return false;
}

console.log(checkOnlyDigit("1234ee")); // but this code fails in space punctuations and any other character

//the ascii code for digit is 0-48 and 9-57
function checkDigit(str) {
  for (let i = 0; i < str.length; ++i) {
    let code = str.charCodeAt(i);
    if (code < 48 || code > 57) {
      return false;
    }
  }
  return true;
}

console.log(checkDigit("1234567rr"));

// Replace all spaces in a string with %20
function replaceSpaceWith20(sentence) {
  let result = "";
  for (let i = 0; i < sentence.length; ++i) {
    const char = sentence[i];
    if (char === " ") {
      result += "%20";
    } else {
      result += char;
    }
  }
  return result;
}
console.log(replaceSpaceWith20("this is anshu"));

// Remove all occurrences of a given character from string
function removeCharacter(str, target) {
  let result = "";
  for (let i = 0; i < str.length; ++i) {
    const char = str[i];
    if (char === target) {
      continue;
    }
    result += char;
  }
  return result;
}

console.log(removeCharacter("programming", "m"));

// Toggle case of each character in a string
function toggleString(str) {
  let result = "";
  for (let i = 0; i < str.length; ++i) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += " ";
    }
  }
  return result;
}
console.log(toggleString("anshu KUMAR"));



function abx() {
  console.log("sghdjvsxc");
}
console.log("abb", abx())

function macbook() {
  console.log("macbook pe chalaying code--->>>");
}
macbook();

console.log("anshu kumar");