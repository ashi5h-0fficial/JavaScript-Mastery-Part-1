let value_1 = 192;
let value_2 = "102.23";
let value_3 = "Shivam";
let value_4 = "";
let value_5 = true;
let value_6 = false;
let value_7 = null;
let value_8 = undefined;

{
    
    const num1 = parseFloat(value_1); //192
    const num2 = parseFloat(value_2); //102.23
    const num3 = parseFloat(value_3); //NaN
    const num4 = parseFloat(value_4); //NaN
    const num5 = parseFloat(value_5); //NaN
    const num6 = parseFloat(value_6); //NaN
    const num7 = parseFloat(value_7); //NaN
    const num8 = parseFloat(value_8); //NaN
  
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
