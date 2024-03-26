/*  optional chaining ?.
    --> It is used for safer side in case when we aren't sure about data is present or not in database.
*/
const userInfo = {
  id: 123,
  username: "Harish",
  age: 23,
  address: { house_No: 2524 / 1, street: "Nirala nagar" },
};
console.log(userInfo);

console.log(userInfo.username);
console.log(userInfo?.age); //here ? means if userInfo exist, give age
console.log(userInfo?.address?.house_No);
