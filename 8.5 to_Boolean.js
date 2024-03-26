// Convert the following values in to boolean data Type
let str1 = 192;
let str2 = "102.23";
let str3 = "Shivam";
let str4 = "";
let str5 = true;
let str6 = false;
let str7 = null;
let str8 = undefined;

const bool1 = Boolean(str1); //true
const bool2 = Boolean(str2); //true
const bool3 = Boolean(str3); //true
const bool4 = Boolean(str4); //false
const bool5 = Boolean(str5); //true
const bool6 = Boolean(str6); //false
const bool7 = Boolean(str7); //false
const bool8 = Boolean(str8); //false

console.log(
  `
    ${bool1}: ${typeof bool1} 
    ${bool2}: ${typeof bool2} 
    ${bool3}: ${typeof bool3} 
    ${bool4}: ${typeof bool4} 
    ${bool5}: ${typeof bool5} 
    ${bool6}: ${typeof bool6}
    ${bool7}: ${typeof bool7}
    ${bool8}: ${typeof bool8}
  `
);