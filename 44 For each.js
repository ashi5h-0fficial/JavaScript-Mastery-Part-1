/*
ForEach method: 
--> By default, foreach ka callback function ke parameter me: array ka element aur uska index leta hai, 3rd parameter pura array hota, jisko print kr skte h. 
--> It doesn't return any array and if we use return in callback of forEach, we will get undefined.
*/

const numbers = [4, 2, 5, 8];

//Printing array element using forEach:
numbers.forEach(function (arrelemnt, index) {
  console.log(`at index ${index} value is ${arrelemnt}`);
});

//Function to multiply array element by 2:

numbers.forEach(function (num) {
  console.log(num * 2);
});

//Printing values using forEach:
const userss = [
  { uname: "rohan", age: 34, hobby: "sleeping" },
  { uname: "ravi", age: 33, hobby: "jumping" },
  { uname: "rahat", age: 35, hobby: "eating" },
];

// for (let i of userss) {
//   console.log(i.uname);
// }

// userss.forEach(function (user) {
//   console.log(user.uname);
// });
userss.forEach((user) => {
  console.log(user.uname);
});
