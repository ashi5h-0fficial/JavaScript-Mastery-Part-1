/* string concatenation 

• + operator: adds two or more strings, but doesn't returns anything.
    syntax: str1 + str2

• concat() method: Returns a string that contains the concatenation of two or more trings
    syntax: str1.concat(str2) 
*/

//method 1: + operator 
const str1 = "Ahamad";
const str2 = "Mohmad";
console.log(str1 + str2);

const strnum1 = "12";
const strnum2 = "10";
console.log(+strnum1 + +strnum2);

//method 2: concat() method
{
const str1 = "Ahamad";
const str2 = "Mohmad";
const concatedstr=str1.concat(str2);
console.log(concatedstr);
//OR
console.log(str1.concat(str2));
}
