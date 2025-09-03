console.log("begins");
setTimeout(() => {
  //macrotasks queue
  console.log("settimeout 1");
  Promise.resolve().then(() => {
    //microtasks (highest priority)
    console.log("promise 1");
  });
}, 0);
new Promise(function (resolve, reject) {
  //microtaskqueue (highest priority)
  console.log("promise 2");
});

//begins
//promise 2
//settimeout 1
//promise 1

console.log(a());
function a() {
  console.log("a--->");
}
const b = () => {
  console.log("b---->");
};

console.log(b());

const [c, d] = [1, 2];
console.log(c);
console.log(d);

const [e, f, g = 5] = [4, 8];
console.log(e, f, g);

const name1 = "ANSHU";
const age = 23;
function name(name, age) {
  console.log(`my name is ${name} and age is ${age}`);
}
console.log(name(name1, age));

const x = [1, 2];
const y = [3, 4];
const z = [...x, ...y];
console.log(z);

function rest(...args) {
  console.log(args);
}

console.log(rest(11, 2, 3, 4));

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);

const person1 = {
  name: "Anshu",
};
const person2 = {
  name: "Kumar",
};
function greet(greeting) {
  return `${greeting} is ${this.name}`;
}
console.log(greet.call(person1, "Hi"));
console.log(greet.call(person2, "Hello"));
const arr = [1, 2, 3, 4];
console.log(Math.max.apply(null, arr));

console.log(greet.apply(person1, ["hellu"]));
console.log(greet.bind(person1, "hrrrrr"));
const greetFunction = greet.bind(person1);
console.log(greetFunction("hellooouuuu"));

const animal = {
  name: "cat",
};
const cat = Object.create(animal);
console.log(cat.name);
