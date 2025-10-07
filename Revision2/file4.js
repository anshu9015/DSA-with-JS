function ques1(arr) {
  const obj = {};
  for (let ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  return obj;
}
console.log(ques1([1, 1, 2, 3, 4, 1]));

function ques2(arr) {
  const obj = {};
  let highestFrequency = -Infinity;
  let lowestFrequency = Infinity;
  let highestElement;
  let lowestElement;
  for (let ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  for (let [key, value] of Object.entries(obj)) {
    if (value > highestFrequency) {
      highestFrequency = value;
      highestElement = key;
    }
    if (value < lowestFrequency) {
      lowestFrequency = value;
      lowestElement = key;
    }
  }
  return { highestElement, lowestElement };
}
console.log(ques2([1, 2, 1, 1, 2, 4]));
