/*
Map method:
--> Map method always return some value and store it in a new array. 
--> If we try to return more than 1 value, like return person.uname, person.age; 2nd value is returned only not 1st value.
--> If we don't write return in callback of Map, By default it returns "undefined".
--> Map method me bhi forEach ki trh 2nd parameter "index" hota hai aur 3d parameter pura array hota hai.
*/

const numbers = [4, 2, 5, 8];

const output = numbers.map((num) => {
  return num * num;
});
const result = numbers.map((num, indx,arr) => {
  return `at index ${indx} value is ${num * num} and array:${arr}`;
});

console.log(result);

// Realistic example

const userss = [
  { uname: "rohan", age: 34, hobby: "sleeping" },
  { uname: "ravi", age: 33, hobby: "jumping" },
  { uname: "rahat", age: 35, hobby: "eating" },
];

const usrnam = userss.map((usr) => usr.uname);
console.log(usrnam);
