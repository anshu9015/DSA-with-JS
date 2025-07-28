const map = new Map();

const map1 = new Map([["a", 1],["b",2]]);
console.log(map1);  // Map(2) { 'a' => 1, 'b' => 2 }


map.set("name","anshu");
map.set(1,"one");
map.set(true,"yes");

console.log(map);   // Map(3) { 'name' => 'anshu', 1 => 'one', true => 'yes' }
console.log(map.get("name"))// anshu
console.log(map.get("anshu"))//undefined
console.log(map.has("one"))// false
console.log(map.has(1))// true
console.log(map.delete(true));
console.log(map.delete("one"))//delete(key) only
console.log(map)

console.log(map.size)

for(let key of map.keys()){
    console.log(key)
}
for(let value of map.values()){
    console.log(value)
}

for(let [key,value] of map.entries()){
    console.log(key,value)
}
map.forEach((key,value) => {
    console.log(key,value)
})
console.log(map.clear())//undefined
console.log(map.size)