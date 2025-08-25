function checkTwoStringRotation(str1, str2) {
  const str3 = str1 + str1;
  return str3.includes(str2);
}
console.log(checkTwoStringRotation("abcde", "edcba"));
