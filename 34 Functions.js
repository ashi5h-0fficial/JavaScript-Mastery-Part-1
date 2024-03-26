//Functions in JS

/*
--> Type1: function declaration
    function fn_name(){ fn_body..}

--> Type2:function expression 
    const fn_name=function(){ fn_body..}

--> Type3: Arrow function
    const fn_name=()=>{ fn_body..}

--> Arrow function and function expressions are also known as ANONYMOUS functions
*/

//function declaration
function greet1() {
  console.log("Have a nice day");
}

//function expression
const greet2 = function () {
  console.log("Have a nice day");
};

//Arrow function
const greet3 = () => {
  console.log("have a nice day");
};
greet1();
greet2();
greet3();

//How to write arrow function in one line
const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(5));

//Function examples:

// 1) isEven
//input : 1 number
//output : true , false
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4));

// 2)
// input : string
// output: firstCharacter
function firstChar(anyString) {
  return anyString[0];
}
console.log(firstChar("zbc"));

// 3)
// input : array, target (number)
// output: index of target if target present in array

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray, 4);
console.log(ans);

// 4)
const sumNumbers = (...num) => {
  let sum = 0;
  for (let i of num) {
    sum += i;
  }
  return sum;
};

const result = sumNumbers(3, 5, 6, 10, 100);
console.log(result);
