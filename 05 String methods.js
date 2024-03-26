/* String methods:
    • trim() 
    • toUpperCase()
    • toLowerCase()
    • slice(): always takes (start and end index) and returns sliced string

Note:- Strings are immutable.
*/

let firstName = "  Harshit  ";
console.log(firstName)
console.log(firstName.length); //11

/* trim():
• It removes whitespaces from left and right side of string, not from middle of a string.
• It does not change the original string, instead it returns a new string.
*/
firstName = firstName.trim(); // "Harshit"
console.log(firstName);
console.log(firstName.length); //7

// toUpperCase() and toLowerCase() also doesn’t change original string and returns a new string.
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// Slice() method also return a new string and doesn't change the original string.
const newstr = "My name is ashish soni";
const reducedstr = newstr.slice(2, 15);
console.log(reducedstr);

let newString = firstName.slice(3); // hars
console.log(newString);

// start index [0]
// end index   [str.length-1]
const usrnam="Abhishek";
console.log(usrnam.lastIndexOf("k")); //7
console.log(usrnam.length-1);  //7