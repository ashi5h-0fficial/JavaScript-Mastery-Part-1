
/* hoisting: Calling function before functio definition

    • JavaScript puts definition above before calling a function.
    • We can access var before its declaration.
    • We can't access let and const before its declaration.
*/



hello(); //Calling before function declaration

function hello() {
  console.log("hello world");
}

// Using const & let before declaration, gives error
console.log(Hello);
const Hello = "hello world";

console.log(Greet);
let Greet="good morning";


/* hoisting: built-in behavior of the JavaScript through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution.

    • Function declarations
    • Variables declarations

• Only declarations are hoisted, not assignments. If you use a variable or function before its declaration line, the declaration is brought to the top, but any initialization or value assignment stays in its original position.

let and const have modified hoisting behavior: They are hoisted, but not initialized, leading to a "Temporal Dead Zone" where you can't access them before their declaration line.

*/

//Example 1:
console.log(myVar); // Outputs: undefined
var myVar = 10;

//Example 2:
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10; 

//Variables declared with let and const are hoisted, but not initialized. Trying to use them before their declaration line results in a ReferenceError.

//Example 3:
sayHello(); // This works! 

function sayHello() {
    console.log("Hello!");
}
