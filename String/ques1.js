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
