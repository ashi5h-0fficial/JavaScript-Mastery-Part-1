"use strict";
const prompt = require("prompt-sync")();

// ternary operator or conditional operator

let age = 4;
let drink;

if (age >= 5) {
  drink = "coffee";
} else {
  drink = "milk";
}
console.log(drink);

let age1 = 3;
let drink1 = age1 >= 5 ? "coffee" : "milk";
console.log(drink1);

while (true) {
  const age = Number(prompt("enter your age: "));
  const result = age >= 18 ? "you can drive\n" : "you can't drive\n";
  console.log(result);
}
