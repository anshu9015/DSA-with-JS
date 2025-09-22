function countingFrequency(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; ++i) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  return map;
}
console.log(countingFrequency([1, 2, 1, 3, 1]));

function highestLowestFrequency(arr) {
  let map = new Map();
  let max = -Infinity;
  let min = Infinity;
  let highestElement;
  let lowestElement;
  for (let i = 0; i < arr.length; ++i) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  for (let [key, values] of map.entries()) {
    if (values > max) {
      max = values;
      highestElement = key;
    }
    if (values < min) {
      min = values;
      lowestElement = key;
    }
  }
  return { highestElement, lowestElement };
}
console.log(highestLowestFrequency([1, 2, 1, 3, 1, 2]));
