const el = document.getElementsByClassName("box");
const elArray = Array.from(el).map((item) => item.innerText);
console.log(elArray, "script tag in head");