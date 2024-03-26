
// Convert given below into integer: parseInt(any_value)

let value_1 = "192";
let value_2 = "102.23";
let value_3 = "Shivam";
let value_4 = "";
let value_5 = true;
let value_6 = false;
let value_7 = null;
let value_8 = undefined;

{
  //Method 2: parseInt(value)
  const num1 = parseInt(value_1); //192
  const num2 = parseInt(value_2); //102
  const num3 = parseInt(value_3); //NaN
  const num4 = parseInt(value_4); //NaN
  const num5 = parseInt(value_5); //NaN
  const num6 = parseInt(value_6); //NaN
  const num7 = parseInt(value_7); //NaN
  const num8 = parseInt(value_8); //NaN

  console.log(
    `
      ${num1}: ${typeof num1} 
      ${num2}: ${typeof num2} 
      ${num3}: ${typeof num3} 
      ${num4}: ${typeof num4} 
      ${num5}: ${typeof num5} 
      ${num6}: ${typeof num6}
      ${num7}: ${typeof num7}
      ${num8}: ${typeof num8}
    `
  );
}
