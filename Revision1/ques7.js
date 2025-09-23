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
