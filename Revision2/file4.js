function ques1(arr) {
  const obj = {};
  for (let ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  return obj;
}
console.log(ques1([1, 1, 2, 3, 4, 1]));
