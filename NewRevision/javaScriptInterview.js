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
