function math1(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(math1(12345));

function reverseNumber(n) {
  let reverse = 0;
  while (n > 0) {
    let r = n % 10;
    n = Math.floor(n / 10);
    reverse = reverse * 10 + r;
  }
  return reverse;
}

console.log(reverseNumber(12345));

function checkPallindrome(n) {
  let checkPallindrome = reverseNumber(n);
  if (n === checkPallindrome) {
    return true;
  }
  return false;
}
console.log(checkPallindrome(123));

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}
console.log(gcd(15, 20));

function gcd1(a, b) {
  let gcd = 1;
  for (let i = 1; i < Math.min(a, b); ++i) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
console.log(gcd1(15, 20));

function armstrong(n) {
  let digit = math1(n);
  let temp = n;
  let sum = 0;
  while (n > 0) {
    sum += Math.pow(n % 10, digit);
    n = Math.floor(n / 10);
  }
  if (sum === temp) {
    return true;
  }
  return false;
}
console.log(armstrong(153));

function printAllDivisor(n) {
  let res = [];
  for (let i = 0; i < Math.sqrt(n); ++i) {
    if (n % i === 0) {
      res.push(i);
      if (i != n / i) {
        res.push(n / i);
      }
    }
  }
  return res;
}
console.log(printAllDivisor(12));

function primeNumber(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeNumber(21));

function bubble(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
console.log(bubble([1, 4, 2, 5, 3]));

function selection(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
}
console.log(selection([1, 4, 2, 5, 3]));

function insertion(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (j = i; j >= 0; --j) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}
console.log(insertion([1, 4, 2, 5, 3]));

function quick(arr) {
  let left = [];
  let right = [];
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quick(left), pivot, ...quick(right)];
}
console.log(quick([1, 4, 2, 5, 3]));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
}
console.log(mergeSort([1, 4, 2, 5, 3]));

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let newMap1 = new Map();
  for (let i = 0; i < str1.length; ++i) {
    newMap1.set(str1[i], (newMap1.get(str1[i]) || 0) + 1);
  }
  for (let i = 0; i < str2.length; ++i) {
    if (!newMap1.has(str2[i])) {
      return false;
    }
    newMap1.set(str2[i], newMap1.get(str2[i] - 1));
    if (newMap1.get(str2[i]) < 0) {
      return false;
    }
  }
  return true;
}
console.log(anagram("silent", "listen"));

function reverseWord(str) {
  return str.split("").reverse().join("");
}
console.log(reverseWord("anshu"));

function reverseWord1(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; --i) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseWord1("anshu"));

function reverseEveryWord(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; ++i) {
    let word = words[i];
    let reversed = "";
    for (let j = word.length - 1; j >= 0; --j) {
      reversed += word[j];
    }
    words[i] = reversed;
  }
  return words.join(" ");
}
console.log(reverseEveryWord("this is anshu"));

function reverseEveryWordInSentence(sentence) {
  let result = "";
  let word = "";
  for (let i = 0; i < sentence.length; ++i) {
    const char = sentence[i];
    if (char === " ") {
      for (let j = word.length - 1; j >= 0; --j) {
        result += word[j];
      }
      result += " ";
      word = "";
    } else {
      word += char;
    }
  }
  for (let i = word.length - 1; i >= 0; --i) {
    result += word[i];
  }
  return result;
}

console.log(reverseEveryWordInSentence("this is anshu coding"));

function abc(sentence) {
  let result = "";
  let word = "";
  for (let i = sentence.length - 1; i >= 0; --i) {
    const char = sentence[i];
    if (char === " ") {
      for (let j = word.length - 1; j >= 0; --j) {
        result += word[j];
      }
      result += " ";
      word = "";
    } else {
      word += char;
    }
  }
  for (let i = word.length - 1; i >= 0; --i) {
    result += word[i];
  }
  return result;
}
console.log(abc("this is anshu string"));
