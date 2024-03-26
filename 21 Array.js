// reference type : all reference type is a object. => Array is reference type.

/*  intro to arrays 
    => Array is an ordered collection of items. Items may be of different data types (int, str, bool, ...) 
    => type of Array is an object.
*/

{
  let fruits = ["apple", "mango", "grapes"];
  let numbers = [1, 2, 3, 4];
  let mixed = [1, 2, 2.3, "string", null, undefined];
  console.log(mixed);
  console.log([1, 2, 2.3, "string", null, undefined]);
  console.log(numbers);
  console.log(fruits[2]);
}

{
  const obj = {}; //Object literal
  let fruits = ["apple", "mango", "grapes"];
  console.log(fruits);
  fruits[1] = "banana";
  console.log(fruits);
  console.log(typeof fruits);

  console.log(Array.isArray(fruits)); //HOW to check array
  console.log(Array.isArray(obj));
}

{
  // use const for creating array

  // heap memory ["apple", "mango"] 0x11
  const fruits = ["apple", "mango"]; // 0x11
  fruits.push("banana");
  console.log(fruits);

  // --> Here const fruits contains address of array ["apple","mango"]
  // --> In push() operation, we are not changing the address of fruits.
  // --> We are just adding element banana into heap memory.
}
