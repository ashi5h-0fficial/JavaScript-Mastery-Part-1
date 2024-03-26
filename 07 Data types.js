/* Data types (primitive data types)- N N B B S S U
    null     : null 
    number   : 2, 4, 5.6 
    booleans : true, false 
    BigInt   : 876456785n
    string   : "harhit"
    Symbol   : Symbol("Have a nice day")
    undefined: undefined
*/

const a1 = null; // type of null is 'Object', which is an error/bug in JavaScript
const a2 = 15; // Number
const a3 = true; // Boolean
const a4 = BigInt(45676543); // BigInt
const a5 = "AbhaySingh"; // String
const a6 = Symbol("Have a nice day"); // Symbol
let a7; // Undefined

// typeof operator

console.log(
  `
    value = ${a1}, type: ${typeof a1} 
    value = ${a2}, type: ${typeof a2} 
    value = ${a3}, type: ${typeof a3} 
    value = ${a4}, type: ${typeof a4} 
    value = ${a5}, type: ${typeof a5} 
    value = ${a7}, type= ${typeof a7}
  `
);
console.log(`value = `,a6,`, type = ${typeof a6}`) 

/* Note: Symbol can't be added with string directly, becoz to add a symbole with string, firstly symbol must be converted into string. Symbol value can't be implicitly converted into string. 
We can explicitly convert symbol into string, then we can use all string methods/property

console.log(a6+"aman"); --> it wil give error; becoz a6 is symbol here.
*/

const convertdstr=String(a6);
console.log(`\nValue= ${convertdstr}, type= ${typeof convertdstr}`);
console.log(convertdstr+"mohan singh");