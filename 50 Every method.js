/* Every():
    • Every() method returns boolean values, callback() of every() method also returns true/false.
    • If for every array-element callback of every() returns true: then result of every() is TRUE otherwise FALSE.
*/

const numbers = [2, 4, 6, 9, 10];
const ans = numbers.every((number) => number % 2 === 0);
console.log(ans);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
];

const result = userCart.every((cartItem) => cartItem.price < 30000);
console.log(result);
