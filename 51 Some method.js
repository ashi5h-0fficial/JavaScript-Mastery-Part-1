// • Some() method also returns boolean value, if callback of Some() finds true for atleast one element, result of some will be true, otherwise false.

const numbers = [3, 5, 11, 9];

// kya ek bhi number esa hai jo even hai
// true

const ans = numbers.some((number)=>number%2===0);
console.log(ans);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
  { productId: 3, productName: "macbook", price: 25000 },
];

const result = userCart.some((cartItem) => cartItem.price > 100000);
console.log(result);
