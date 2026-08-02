const person = {
  name: "Anshu",
  age: 25,
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
for (let [key, value] of Object.entries(person)) {
  console.log(key + "s", value + "7");
}

const arr = [
  ["name", "Anshu"],
  ["age", 25],
];

console.log(Object.fromEntries(arr));
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const result = Object.assign({ c: 3 }, obj1, obj2);

// console.log(result);

// const result1 = { ...obj1, ...obj2 };
// console.log(result1);

const obj1 = {
  name: "Anshu",
  address: {
    city: "Delhi",
  },
};

const obj2 = Object.assign({}, obj1);

obj2.address.city = "Pune";
obj2.name = "prince";

console.log(obj1.address.city);
console.log(obj1.name);
console.log("obj2--->>>", obj2);

function deepClone(obj) {
  let result = {};
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  for (let key in obj) {
    if (obj[key]) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
const obj3 = deepClone(obj1);
obj3.address.city = "hyderabad";
console.log(obj3);
console.log(obj1);

const obj4 = Object.create(obj1);
console.log("object4", obj4);

const propertyDescriptor = {
  name: "Anshu",
};
console.log(
  "property descriptor---->>>>>",
  Object.getOwnPropertyDescriptor(propertyDescriptor, "name"),
);

const descriptor1 = {};
Object.defineProperty(descriptor1, "name", {
  value: "Shivani",
  writable: false,
  enumerable: true,
  configurable: false,
});
console.log("desdfsdfdss", descriptor1);
delete descriptor1.name;
descriptor1.name = "anshushivani";
descriptor1.age = 26;
console.log(descriptor1);
console.log(Object.keys(descriptor1));
console.log(Object.values(descriptor1));
for (let [key, value] of Object.entries(descriptor1)) {
  console.log(key, value);
}
const studentName = {
  first: "shivani",
  last: "verma",
};
Object.defineProperty(studentName, "fullName", {
  get() {
    return `${this.first} ${this.last}`;
  },
});
console.log(studentName.fullName);

// const students = [
//   { name: "Anshu", city: "Delhi" },
//   { name: "Rahul", city: "Pune" },
//   { name: "Amit", city: "Delhi" },
// ];

// const result = Object.groupBy(students, (student) => student.city);
// console.log(result);

const defineProperties = {};
Object.defineProperties(defineProperties, {
  fullName: {
    value: "shivani verma",
    writable: true,
    enumerable: true,
  },
  address: {
    value: "pune",
    writable: true,
  },
});
console.log("defineproperties", defineProperties);
console.log(Object.getOwnPropertyDescriptor(defineProperties, "fullName"));

let iilegal = "sdsdf";
{
  var illegal = "fgfg";
  console.log(illegal);
}
console.log(illegal);

// let a = 10
//   ,b = 12
//   ,c = 13;
// console.log(a); //10
// console.log(b); //12
// console.log(c);//13

// const my_name = "anshu";
// console.log(my_name)//anshu

// console.log(typeof(NaN))//object

// console.log("1"+2+2)//14
// console.log(2+2+ +"1")//41
// const apple = "dgfdghgfh";
// console.log(typeof(+apple));//number
// console.log(undefined==null) //true

// let hero = null;
// let hero1 = {};
// console.log(typeof(hero1));
// console.log(typeof(hero))
// hero1.age = 50;
// // hero.age = 30;
// console.log(hero1)
// // console.log(hero)

// console.log([]==[])
// console.log(typeof([]))
// console.log(NaN===NaN)
// console.log(Object.is(NaN,NaN))
// console.log(+0===-0)
// console.log(Object.is(+0,-0))

// var abc = 20;
// var abc = 30;
// console.log(abc)

// for(var i = 0;i<3;i++){
// setTimeout(() =>console.log(i),1000);
// }

// // for(var i = 0;i<3;i++){

// //       (  function abc(j){
// //             setTimeout(() =>console.log(j),5000)
// //             })(i)
// //     // setTimeout(() =>console.log(i),5000)
// // }
// // console.log(i)

// var obj = {
//     name:"anshu",
// }
// console.log(obj)

// obj = {
//     name:"prince"
// }
// console.log(obj)

// let name = "anshu";
// function greet(){
//     let name = "prince";
//     console.log(`hello ${name}`)
// }
// greet();

// var y = 10;
// {
//     let y = 20;
//     // console.log(y)
// }
// console.log(y)
// var abc = "sdvcx"
// const person = {
//     abc: "Anshu",

//     greet: () => {
//         // console.log(this.name);
//     }
// };

// person.greet();

// var abc = "dsgdfg";
// console.log(window.abc);
// var abc = "anshu1"
// const person1 = {
//     abc:"anshu",
//     greet:()=>{
//         console.log(this.abc);
//     }
// }
// console.log(person1.greet())

// function abc(){
//   console.log(arguments)
//   console.log(arguments[0])
// }
// abc(1,2,3,4,5);

// const students = [
//   { name: "Anshu", city: "Delhi" },
//   { name: "Rahul", city: "Pune" },
//   { name: "Amit", city: "Delhi" },
// ];

// const result = Object.groupBy(students, (student) => student.city);
// console.log(result);

// console.log([1]+[2]-[1])

// var illegal = "sdsdf"
// {
//     let illegal = "fgfg";
//     console.log(illegal)
// }
// console.log(illegal)

// for(var i = 0;i<3;++i){
//     ((i) =>{
//         setTimeout(()=>console.log(i),1000)
//     })(i)

// }
// const obj1 = Object.create(null);
// obj1.name = "anshu";
// console.log(Object.hasOwn(obj1,"name"));

// function person(name){
//     this.name = name
// }

// const newPerson = new person("anshu");
// console.log(newPerson.name)

const arrowArguments = (...args) => {
  console.log(args);
};
console.log(arrowArguments(1, 2, 3));

function normalArgument() {
  console.log(arguments);
}
normalArgument(1, 2, 3);

function abc() {
  console.log(arguments);
}
abc(1, 2, 3, 3);

const person6 = {
  name: "anshu",
  age: 25,
};
// const { name1, age1 } = person6;
// console.log(name1); //undefined
// console.log(age1); //undefined

const { name: name1, age: age1 } = person6;
console.log(name1);

const age = NaN;
console.log("NULLISH COALESCING", age ?? 25);

const map = new Map();
map.set("name", "anshu");
map.set(1, "one");
console.log(map);

const map1 = new Map([
  ["name", "anshu"],
  [1, "one"],
]);
console.log(map1);
console.log(map1.has("name"));
map1.delete(1);
console.log("deleted map", map1);
console.log(map.get(1));
console.log(map.size);
map1.clear();
console.log("cleared data--->>>", map1);
console.log(map1.size);

function person5(name) {
  this.name = name;
}
person5.prototype.sayhello = function () {
  console.log(`hello , i am  ${this.name}`);
};
const p = new person5("anshu");
p.sayhello();

class person7 {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello, this is ${this.name}`);
  }
}
const p2 = new person7("anshu");
console.log(p2.__proto__);

const object8 = {
  name: "anshu",
};
const obj8 = Object.create(object8);
console.log(obj8.name);

const obj9 = {
  age: 25,
};
obj9.__proto__ = object8;
console.log("obj934343", obj9.name);

const obj10 = {
  value: "hero",
};
Object.setPrototypeOf(obj10, object8);
console.log("obj10,,,,", obj10.name);

function objectPrototype() {
  console.log("hii");
}
objectPrototype.prototype.greet = function () {
  console.log("hii, i am here");
  return "i am here too";
};
console.log(objectPrototype.prototype.greet());

const obj100 = {
  name: "anshu",
};

const numArray = [
  ["a", 1],
  ["b", 2],
  [1, 2, 3, 4, 5, 6, 8],
];
console.log(Object.fromEntries(numArray));

// const nums = [1, 2, 3];
// nums.forEach((num) => {
//   console.log(num * 2);
// });
// console.log(nums);
const nums = [1, 2, 3];

nums.forEach((num, index) => {
  nums[index] = num * 2;
});
console.log("nums--->>>", nums);
const names = ["Rahul", "Anshu", "Amit"];

names.sort();

console.log(names);

const users = [
  { name: "anshu" },
  { name: "anubhav" },
  { name: "prince" },
  { name: "arun" },
];
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);

function sumArray(arr) {
  let resultSum1 = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (i < 8) {
      resultSum1 += arr[i];
    } else if (i < 16 && i >= 8) {
      resultSum1 += arr[i] * 2;
    } else if (i < 24 && i >= 16) {
      resultSum1 += arr[i] * 3;
    } else {
      resultSum1 += arr[i] * 4;
    }
  }
  return resultSum1;
}

function mapWords(str) {
  const map = new Map();
  for (let i = 0; i < str.length; ++i) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  console.log("map---->>>", map);

  let arr = [];
  for (let [key, value] of map.entries()) {
    arr.push(value);
  }
  arr.sort((a, b) => b - a);
  console.log(arr);
  let result = sumArray(arr);
  return result;
}
// console.log(mapWords("abcde"));
console.log(mapWords("aabbccddeeffgghhiiiiii"));

const arr100 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sumArray(arr100));
