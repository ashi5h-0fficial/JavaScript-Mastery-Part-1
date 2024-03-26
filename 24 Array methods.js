// array push() and pop()

// array shift() and unshift()

{
  // push(): Appends new elements to the end of an array, and returns the new length of the array. This method also change the original array
  let fruits = ["apple", "mango", "grapes"];
  console.log(fruits);
  fruits.push("banana");
  console.log(fruits);

  const newArrayLength = fruits.push("Pineapple");
  console.log(fruits);
  console.log(`New array length: ${newArrayLength}`);
}

{
  // pop(): Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified. .This method also change the original array
  let fruits = ["apple", "mango", "grapes"];
  let poppedFruit = fruits.pop();
  console.log(fruits);
  console.log("popped fruits is", poppedFruit);
}

{
  // unshift(): Inserts new elements at the beginning of an array, and returns the new length of the array.
  let fruits = ["apple", "mango", "grapes"];
  const newArrayLength = fruits.unshift("banana");
  console.log(fruits);
  console.log(`New array length: ${newArrayLength}`);
}

{
  // shift():Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.This method changes the original array
  let fruits = ["apple", "mango", "grapes"];
  let removedFruit = fruits.shift();
  console.log(fruits);
  console.log("removed fruits is ", removedFruit);
}
