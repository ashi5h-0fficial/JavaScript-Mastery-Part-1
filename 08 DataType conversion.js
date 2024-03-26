/*
    1. Converting Strings to Numbers
    2. Converting Numbers to Strings
    3. Converting Dates to Numbers
    4. Converting Numbers to Dates
    5. Converting Booleans to Numbers
    6. Converting Numbers to Booleans
*/

/* to Number
    • Number()    : Returns a number, converted from its argument
    • + operator  : unary + operator can be used to convert a variable to a number
    • parseInt()  :	Parses a string and returns an integer
    • parseFloat(): Parses a string and returns a floating point number
*/


/* to Strings
    • String()   : Convertsnumbers to strings.
    • toString() : do the same as String() does
    • + " "      : do the same as String() does
*/


/* to Boolean
    • Boolean() : Returns true/false by parsing given value 
    • !!        : Double NOT operator does the same
*/


//----Some More methods---

//• toExponential(): convert a number in exponential notation, in string format.
let num1 = 64;
let exnum = num1.toExponential();
console.log(exnum, typeof exnum);

// • toPrecision(): formats a number to a specified length
let num2 = 643.34567;
let pnum = num2.toPrecision(3);
console.log(pnum, typeof pnum); //643

// • tofixed(): round of decimal to specified length.
let num3 = 643.34567;
let fixednum = num3.toFixed(2);
console.log(fixednum, typeof fixednum); //643.34

// • toLocaleString() returns a number as a string, using local language format.
// The language format depends on the locale setup on your computer.
let num4 = 12000200;
let localstr = num4.toLocaleString();
console.log(localstr, typeof localstr); //10,00,200
