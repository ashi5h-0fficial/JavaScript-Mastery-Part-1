/* BigInt: It is used to wrtie numbers bigger than MAX_SAFE_INTEGER
   How to write BigInt values:
   method 1: BigInt(number...) e.g BigInt(1234567)
   method 2: number...n        e.g 2345676n 
*/
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER)
console.log(myNumber+ sameMyNumber);

//Operation on bigInt and Number will throw type erro. Always use correct data type in operation.

