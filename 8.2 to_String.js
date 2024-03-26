//Convert the following values into string

let value_1 = 192;
let value_2 = 10223n;
let value_3 = "Shivam";
let value_4 = "";
let value_5 = true;
let value_6 = false;
let value_7 = null;
let value_8 = undefined;

{
  //Method 1: String(any_value)
  const str1 = String(value_1); //192
  const str2 = String(value_2); //10223
  const str3 = String(value_3); //Shivam
  const str4 = String(value_4); //
  const str5 = String(value_5); //true
  const str6 = String(value_6); //false
  const str7 = String(value_7); //null
  const str8 = String(value_8); //undefined

  console.log(
    `
      ${str1}: ${typeof str1} 
      ${str2}: ${typeof str2} 
      ${str3}: ${typeof str3} 
      ${str4}: ${typeof str4} 
      ${str5}: ${typeof str5} 
      ${str6}: ${typeof str6}
      ${str7}: ${typeof str7}
      ${str8}: ${typeof str8}
    `
  );
}
const str9=String(NaN)
console.log(str9,typeof str9)


//Method 2 and 3:
//  toString() : do the same as String() does
//  + " "      : do the same as String() does