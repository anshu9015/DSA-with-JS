function frequencyElement(arr) {
  let newMap = new Map();
  for (let val of arr) {
    newMap.set(val, (newMap.get(val) || 0) + 1);
  }
  return [...newMap];
}

console.log(frequencyElement([1, 3, 1, 2, 3, 4, 3, 1]));

function highestLowestFrequency(arr) {
  let newMap = new Map();
  for (let val of arr) {
    newMap.set(val, (newMap.get(val) || 0) + 1);
  }
  let max = -Infinity;
  let min = Infinity;
  let highest;
  let lowest;
  for (let [key, values] of newMap.entries()) {
    if (values > max) {
      max = values;
      highest = key;
    }
    if (values < min) {
      min = values;
      lowest = key;
    }
  }
  return { highest, lowest };
}
console.log(highestLowestFrequency([1, 2, 4, 3, 1, 2, 1, 1, 1, 1, 1, 4]));
