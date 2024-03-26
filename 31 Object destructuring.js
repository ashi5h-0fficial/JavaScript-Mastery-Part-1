
// Object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, year } = band;
console.log(bandName, year);

//how to destructure object's key-value pair with different variable name
const { bandName: var1, year: Band_year } = band;
console.log(var1, Band_year);

//Rest parameter
const { bandName: var3, year: var5, ...rest } = band;
console.log(var3, rest);
