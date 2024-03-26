// Convert given below into Number

/* The global method Number() converts a variable (or a value) into a number.
  A numeric string (like "3.14") converts to a number (like 3.14).
  An empty string (like "") converts to 0.
  A non numeric string (like "John") converts to NaN (Not a Number). */

let value_1 = "192";
let value_2 = "102.23";
let value_3 = "Shivam";
let value_4 = "";
let value_5 = true;
let value_6 = false;
let value_7 = null;
let value_8 = undefined;

{
  //Method 1: Number(any_value)
  const num1 = Number(value_1); //192
  const num2 = Number(value_2); //102.23
  const num3 = Number(value_3); //NaN
  const num4 = Number(value_4); //0
  const num5 = Number(value_5); //1
  const num6 = Number(value_6); //0
  const num7 = Number(value_7); //0
  const num8 = Number(value_8); //NaN

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

{
  //Method 3: +value
  const num1 = +value_1; //192
  const num2 = +value_2; //102.23
  const num3 = +value_3; //NaN
  const num4 = +value_4; //0 
  const num5 = +value_5; //1
  const num6 = +value_6; //0
  const num7 = +value_7; //0
  const num8 = +value_8; //NaN

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
