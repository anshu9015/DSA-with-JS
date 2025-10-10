// Easy Level (1–20)
// Reverse a string                                                                   done
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; --i) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString("anshu"));

// Check if a string is a palindrome                                                    done
function pallindromeString(str) {
  const reverse = reverseString(str);
  if (reverse === str) {
    return true;
  }
  return false;
}
console.log(pallindromeString("abax"));
// Count vowels and consonants in a string                                                   done
function countVowelsConsonants(str) {
  let countVowel = 0;
  let countConsonant = 0;
  for (let ele of str) {
    if (
      ele === "a" ||
      ele === "e" ||
      ele === "i" ||
      ele === "o" ||
      ele === "u" ||
      ele === "A" ||
      ele === "E" ||
      ele === "I" ||
      ele === "O" ||
      ele === "U"
    ) {
      countVowel += 1;
    } else {
      countConsonant += 1;
    }
  }
  return { countVowel, countConsonant };
}
console.log(countVowelsConsonants("anshu"));
// Check if two strings are anagrams                                                           done
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj1 = {};
  for (let ele of str1) {
    obj1[ele] = (obj1[ele] || 0) + 1;
  }
  for (let ele of str2) {
    if (!obj1[ele]) return false;
    obj1[ele]--;
  }
  return true;
}
console.log(anagram("asg", "gsa"));
// Remove duplicate characters from a string                                                      done
function removeDuplicate(str) {
  let newString = "";
  for (let ele of str) {
    if (!newString.includes(ele)) {
      newString += ele;
    }
  }
  return newString;
}
console.log(removeDuplicate("aanshu"));
// Find the first non-repeating character                                                            done
function firstNonRepeating(str) {
  let obj = {};
  for (let ele of str) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}
console.log(firstNonRepeating("swiss"));
// Check if two strings are rotations of each other                                                 not in optimized way but done

// Count the number of words in a string                                                             done
function countWord(str) {
  let count = 0;
  for (let ele of str) {
    count += 1;
  }
  return count;
}
console.log(countWord("anshu"));
// Capitalize the first letter of each word                                                         DONE
function Capitalize(str) {
  let res = "";
  if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
    res += String.fromCharCode(str.charCodeAt(0) - 32);
  }
  for (let i = 1; i < str.length; ++i) {
    res += str[i];
  }
  return res;
}
console.log(Capitalize("anshu"));

// Convert a string to a character array                                                            done
function characterArray(str) {
  let result = [];
  for (let i = 0; i < str.length; ++i) {
    result.push(str[i]);
  }
  return result;
}
console.log(characterArray("anshu"));

// Count the frequency of each character in a string                                                  done
function countFrequency(str) {
  const obj = {};
  for (let ele of str) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  return obj;
}
console.log(countFrequency("anshu"));

// Replace all spaces in a string with %20                                                            done
function replace(str) {
  let newString = "";
  for (let ele of str) {
    if (ele === " ") {
      newString += "%20";
    } else {
      newString += ele;
    }
  }
  return newString;
}
console.log(replace("this is anshu"));
// Check if a string contains only digits                                                           done
function checkDigit(str) {
  for (let i = 0; i < str.length; ++i) {
    let code = str.charCodeAt(i);
    if (!(code >= 48 && code <= 57)) {
      return false;
    }
  }
  return true;
}
console.log(checkDigit("12345d"));
// Remove all occurrences of a given character from string                                             done

// Toggle case of each character in a string                                                            DONE

// Check if a string has all unique characters                                                            done

// Print all substrings of a string                                                                         done

// Find the length of the shortest and longest word in a string                                             done

// Count number of uppercase and lowercase letters                                                        DONE

// Find the most frequent character in a string                                                              done
