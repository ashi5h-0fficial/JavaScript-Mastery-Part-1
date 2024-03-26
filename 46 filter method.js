// filter method: Filter method always return boolean value, and store filtered values in a new array

const numbers = [1, 3, 2, 6, 4, 8];

const evenNumbers = numbers.filter((number,i,j) => {
  return number%2===0;
});
console.log(evenNumbers);

